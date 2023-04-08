import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { CartDAO } = await new DAOFactory().getDAOs();

class CartService {
    getCartsDB = async () => {
        try {
            return await CartDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    
    
    getCartByIdDB = async (id) => {
        try {
            return await CartDAO.getById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    getCartByEmailDB = async (email) => {
        try {
            return await CartDAO.getCartByEmail(email);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    } 
    
    createCartDB = async (object) => {
        try {
            return await CartDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    updateCartDB = async (id, object) => {
        try {
            return await CartDAO.update(id, object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    deleteCartDB = async (id) => {
        try {
            return await CartDAO.deleteById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }

}


export default CartService;