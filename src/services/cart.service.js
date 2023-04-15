import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { CartDAO } = await new DAOFactory().getDAOs();

class CartService {
    async getCartsDB() {
        try {
            return await CartDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    
    
    async getCartByIdDB(id) {
        try {
            return await CartDAO.getById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async getCartByEmailDB(email) {
        try {
            return await CartDAO.getCartByEmail(email);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    } 
    
    async createCartDB(object) {
        try {
            return await CartDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async updateCartDB(id, object) {
        try {
            return await CartDAO.update(id, object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    async deleteCartDB(id) {
        try {
            return await CartDAO.deleteById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }

}


export default CartService;