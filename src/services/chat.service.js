import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { ChatDAO } = await new DAOFactory().getDAOs();

class CartService {
    getMessagesDB = async () => {
        try {
            return await ChatDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    

    getMessagesByEmailDB = async (id) => {
        try {
            return await ChatDAO.getById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    creareMessageDB = async (email) => {
        try {
            return await ChatDAO.getCartByEmail(email);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    } 

}


export default CartService;