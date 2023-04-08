import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { ProductDAO } = await new DAOFactory().getDAOs();

class ProductService {
    getProductsDB = async () => {
        try {
            return await ProductDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    getProductByIdDB = async (id) => {
        try {
            return await ProductDAO.getById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    getProductsByCategoryDB = async (category) => {
        try {
            return await ProductDAO.getByCategory(category);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    
    createProductDB = async (object) => {
        try {
            return await ProductDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    updateProductDB = async (id, object) => {
        try {
            return await ProductDAO.update(id, object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    deleteProductDB = async (id) => {
        try {
            return await ProductDAO.deleteById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }

}


export default ProductService;