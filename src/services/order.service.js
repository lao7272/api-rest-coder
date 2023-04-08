import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { OrderDAO } = await new DAOFactory().getDAOs();

class OrderService {
    getOrdersDB = async () => {
        try {
            return await OrderDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    
    createOrderDB = async (object) => {
        try {
            return await OrderDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
}



export default OrderService;