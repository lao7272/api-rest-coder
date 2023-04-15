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
        res.status(400).json({error: "Server error"});
    }
}
const getProductById = async (req, res) => {
    try {
        const product = await ProductService.getProductByIdDB(req.params.id);
        if (!product) return res.json({message: 'Product not found'}); 
        const productDTO = new ProductsDTO(product);
        res.json({...productDTO});
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: "Server error"});
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const products = await ProductService.getProductsByCategoryDB(req.params.category);
        if (products.length === 0 || !products) return res.json({message: 'Category not found'}); 
        const productsDTO = products.map(prod => new ProductsDTO(prod));
        res.json({products: productsDTO});
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: "Server error"});
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
        res.status(400).json({error: "Server error"});
    }
}
const updateProduct = async (req, res) => {
    try {
        const findProduct = await ProductService.getProductByIdDB(req.params.id);
        if (!findProduct) return res.json({message: 'Product not found'});
    
        const dataProduct = {...req.body}
        await ProductService.updateProductDB(req.params.id, dataProduct);
        const productDTO = new ProductsDTO({_id: req.params.id, ...dataProduct});
        res.json(productDTO);
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: "Server error"});
    }
}
const deleteProduct = async (req, res) => {
    try {
        const findProduct = await ProductService.getProductByIdDB(req.params.id);
        if (!findProduct) return res.json({message: "Product not found"});        

        ProductService.deleteProductDB(req.params.id);
        res.json(findProduct);
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: "Server error"});
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