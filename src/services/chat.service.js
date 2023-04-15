import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { ChatDAO } = await new DAOFactory().getDAOs();

class CartService {
    async getMessagesDB() {
        try {
            return await ChatDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    

    async getMessagesByEmailDB(email) {
        try {
            return await ChatDAO.getMessagesByEmail(email);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async createMessageDB(message) {
        try {
            return await ChatDAO.save(message);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    } 

}


export default CartService;