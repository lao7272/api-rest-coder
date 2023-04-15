import ServiceFactory from "../services/index.service.js";
import { sendMail } from "../modules/nodemailer.js";
import { getDate } from "../lib/utils.js"
import { logger } from "../modules/logger.js";
import { v4 as uuidv4 } from 'uuid';

const { CartService, OrderService } = await new ServiceFactory().getServices();

const getOrders = async (req, res) => {
    try {
        const { email } = req.user;
        const orders = await OrderService.getOrgerByEmailDB(email);
        res.json(orders);
    } catch (err) {
        logger.error(`Controller error: ${err}`);
        res.status(400).json({error: "Server error"})
    }
}
const createOrder = async (req, res) => {
    try {
        const { email } = req.user;
        const getUserCart = await CartService.getCartByEmailDB(email);

        if (!getUserCart || getUserCart.products.length=== 0) return res.status(400).json({error: "Your cart is empty or you haven't created one yet"});
        if(!getUserCart.active) return res.status(400).json({error: "Already ordered"});

        const productsOrder = getUserCart.products.map(({name, quant, price, description}) => ({name, quant, price, description}))
        const uuid = uuidv4();

        const orderData = {
            orderNumber: uuid,
            timestamp: getDate(), 
            email: email,
            status: "processing",
            products: productsOrder
        }
        const newOrder = await OrderService.createOrderDB(orderData);

        const newOrderEmail = {
            to: email, 
            subject: "Order details", 
            html: `{
                <p>
                    Your order is in process
                    orderNumber: ${uuid},
                    purchase date: ${getDate()}, 
                    email: ${email},
                    status: processing,
                    products: ${productsOrder}
                </p>

            }`
        }
        sendMail(newOrderEmail);
        await CartService.updateCartDB(getUserCart._id, {active: false})
        res.json({order: newOrder});
    } catch (err) {
        logger.error(`Controller error: ${err}`);
        res.status(400).json({error: "Server error"})
    }
}



export {
    getOrders,
    createOrder
}