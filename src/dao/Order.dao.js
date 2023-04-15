import MongoDBContainer from '../database/MongoDB.database.js';
import OsderSchema from '../models/mongoSchemas/Order.schema.js';
import { logger } from '../modules/logger.js';
class Order extends MongoDBContainer {
    constructor(){
        super('orders', OsderSchema);
    }
    async getOrdersByEmail(email){
        try {
            return await this.collection.find({email: email})
        } catch (err) {
            logger.error(`Dao error: ${err}`)
        }
    }
}
export default Order;
