import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { OrderDAO } = await new DAOFactory().getDAOs();

class OrderService {
    async getOrdersDB() {
        try {
            return await OrderDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async getOrgerByEmailDB(email) {
        try {
            return await OrderDAO.getOrdersByEmail(email);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async createOrderDB(object) {
        try {
            return await OrderDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
}



export default OrderService;