import ServiceFactory from "../services/index.service.js";
import CartDTO from "../dto/cart.dto.js";
import ProductsDTO from "../dto/product.dto.js";
import { getDate } from "../lib/utils.js";
import { logger } from "../modules/logger.js";

const { CartService, ProductService } = await new ServiceFactory().getServices();

const getCarts = async (req, res) => {
    try {
        const dbCarts = await CartService.getCartsDB();
        const carts = dbCarts.map(cart => new CartDTO(cart));
        res.json(carts);
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: err});
    }
}
const getCartById =  async (req, res) => {
    const cartId = req.params.id;
    const cart = await CartService.getCartByIdDB(cartId);
    const { email } = req.user;

    if(!cart || cart.userId !== email) return res.json({message: `Cart not found`});

    const cartDTO = new CartDTO(cart);
    res.json({cart: cartDTO});
}

const createCart = async (req, res) => {
    try {
        const date = getDate();
        const { email, address } = req.user;
        const getCartByEmail = await CartService.getCartByEmailDB(email);
        // Checks if the user has already created a cart
        if (getCartByEmail) {
            if (!getCartByEmail.active) {
                await CartService.deleteCartDB(getCartByEmail._id)
            } else {
                return res.status(400).json({error: "You have already created a cart"})
            }
        }
        const dataCart = {userId: email, address, active: true, timestamp: date, products:[]};
        const newCart = await CartService.createCartDB(dataCart);
        const cartDTO = new CartDTO(newCart);
        res.json({cart: cartDTO});
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: err});
    }
}

const addProductToCart = async (req, res) => {
    try {
        const productId = req.params.productId;
        const cartId = req.params.cartId;
    
        const getProduct = await ProductService.getProductByIdDB(productId);
        const getCart = await CartService.getCartByIdDB(cartId);
        const { email } = req.user;

        if (!getCart || !getProduct) return res.status(400).json({error: `Invalid ID format`});
        if (getCart.userId !== email) return res.status(400).json({error: `Cart not found`});

        let productCartArray = getCart.products;
        const getProductIndex = productCartArray.findIndex(prod => prod._id == productId);

        if(getProductIndex !== -1) {
            productCartArray[getProductIndex].quant = productCartArray[getProductIndex].quant + 1;
            await CartService.updateCartDB(cartId, {products: productCartArray});
            const productDTO = new ProductsDTO(productCartArray[getProductIndex]);
            return res.json({product: productDTO});  
        }

        const addProduct = [getProduct, ...productCartArray];
        await CartService.updateCartDB(cartId, {products: addProduct});
        const productDTO = new ProductsDTO(getProduct);
        res.json({product: productDTO});  
        
    } catch (err) {
        logger.error(`Controller error: ${err}`);
        res.status(400).json({error: err});
    }
    

}

const deleteCart = async (req, res) => {
    try {
        const cartId = req.params.id;
        const getCart = await CartService.getCartByIdDB(cartId);
        const { email } = req.user;
        if (!getCart || getCart.userId !== email) return res.json({message: `Cart not found`}); 
        await CartService.deleteCartDB(cartId);
        res.json({message: `Cart ${cartId} deleted`});
    } catch (err) {
        logger.error(`Controller error: ${err}`);
        res.status(400).json({error: err});
    }
}

const removeProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const cartId  = req.params.cartId;
        const getCart = await CartService.getCartByIdDB(cartId);
        const getProduct = await getCart.products.find(product => product._id == productId)
        const { email } = req.user;

        if (!getCart || !getProduct) return res.status(400).json({error: `Invalid ID format`});
        if (getCart.userId !== email) return res.status(400).json({error: `Cart not found`});

        let productCartArray = getCart.products;
        const getProductIndex = productCartArray.findIndex(prod => prod._id == productId);
        if(getProductIndex !== -1) {
            const productQuant = productCartArray[getProductIndex].quant;
            if (productQuant > 1) {
                productCartArray[getProductIndex].quant = productQuant - 1;
                await CartService.updateCartDB(cartId, {products: productCartArray});
                const productDTO = new ProductsDTO(productCartArray[getProductIndex])
                return res.json({message: `Product deleted`, product: productDTO});  
            }
        }

        const newProductArr = getCart.products.filter(product => product._id != productId);
        await CartService.updateCartDB(cartId, {products: newProductArr});
        res.json({message: `Product deleted`});

    } catch (err) {
        logger.error(err);
        res.status(400).json({error: err});
    }
}
export {
    getCarts,
    getCartById, 
    createCart, 
    addProductToCart,
    deleteCart,
    removeProduct
}