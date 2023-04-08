import ServiceFactory from "../services/index.service.js";
import {getDate} from "../lib/utils.js"
import { logger } from "../modules/logger.js";

const { CartService, OrderService  } = await new ServiceFactory().getServices();


const getOrders = async (req, res) => {
    try {
        
        const orders = await OrderService.getOrdersDB();
        res.json(orders);
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}
const createOrder = async (req, res) => {
    try {
        const { email } = req.user;
        const getUserCart = await CartService.getCartByEmailDB(email);
        if(!getUserCart.active) return res.status(403).json({error: "Already ordered"});
        const getOrders = await OrderService.getOrdersDB();
        const orderData = {
            orderNumber:getOrders.length,
            timestamp: getDate(), 
            email: email,
            status: "complete",
            products: getUserCart.products
        }
        const newOrder = await OrderService.createOrderDB(orderData);
        await CartService.updateCartDB(getUserCart._id, {active: false})
        res.json({email, newOrder});
    } catch (err) {
        logger.error(err);
        res.status(500).json({error: "Ocurrio un en error en el servidor"})
    }
}



export {
    getOrders,
    createOrder
}