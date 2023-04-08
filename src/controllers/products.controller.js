import ServiceFactory from "../services/index.service.js";
import ProductsDTO from "../dto/product.dto.js";
import { logger } from "../modules/logger.js";

const { ProductService } = await new ServiceFactory().getServices();


const getProducts = async (req, res) => {
    try {
        const dbProducts = await ProductService.getProductsDB();
        const productsDTO = dbProducts.map(prod => new ProductsDTO(prod));
        res.json({products: productsDTO});
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}
const getProductById = async (req, res) => {
    try {
        const product = await ProductService.getProductByIdDB(req.params.id);
        if (!product) return res.json({message: 'Producto no encontrado'}); 
        const productDTO = new ProductsDTO(product);
        res.json({...productDTO});
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const dbProducts = await ProductService.getProductsByCategoryDB(req.params.category);
        if (dbProducts.length === 0) return res.json({message: 'Categoria no encontrada'}); 
        const productsDTO = dbProducts.map(prod => new ProductsDTO(prod));
        res.json({products: productsDTO});
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}
const createProduct = async (req, res) => {
    try {
        const newProduct = { ...req.body };
        const createProductRes = await ProductService.createProductDB(newProduct);
        const productDTO = new ProductsDTO(createProductRes);
        res.status(201).json({...productDTO});
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}
const updateProduct = async (req, res) => {
    try {
        const findProduct = await ProductService.getProductByIdDB(req.params.id);
        if (!findProduct) return res.json({message: 'El producto no se encontro'});
    
        const dataProduct = {...req.body}
        await ProductService.updateProductDB(req.params.id, dataProduct);
        const productDTO = new ProductsDTO({_id: req.params.id, ...dataProduct});
        res.json(productDTO);
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}
const deleteProduct = async (req, res) => {
    try {
        const findProduct = await ProductService.getProductByIdDB(req.params.id);
        if (!findProduct) return res.json({message: "El producto ya ha sido eliminado"});        
    
        ProductService.deleteProductDB(req.params.id);
        res.json(findProduct);
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}

export {
    getProducts, 
    getProductById, 
    getProductsByCategory,
    createProduct, 
    updateProduct,
    deleteProduct
}