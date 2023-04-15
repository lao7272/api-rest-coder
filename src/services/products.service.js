import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { ProductDAO } = await new DAOFactory().getDAOs();

class ProductService {
    async getProductsDB() {
        try {
            return await ProductDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async getProductByIdDB(id) {
        try {
            return await ProductDAO.getById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    async getProductsByCategoryDB(category) {
        try {
            return await ProductDAO.getByCategory(category);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    
    async createProductDB(object) {
        try {
            return await ProductDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async updateProductDB(id, object) {
        try {
            return await ProductDAO.update(id, object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    async deleteProductDB(id) {
        try {
            return await ProductDAO.deleteById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }

}


export default ProductService;