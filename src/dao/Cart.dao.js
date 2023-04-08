import MongoDBContainer from '../database/MongoDB.database.js';
import CartSchema from '../models/mongoSchemas/Cart.schema.js';
import { logger } from '../modules/logger.js';

class Cart extends MongoDBContainer {
    constructor(){
        super('carts', CartSchema)
    }
    async getCartByEmail(email){
        try {
            return await this.collection.findOne({userId: email});
        } catch (err) {
            logger.error(`Dao error: ${err}`);
        }
    }
}

export default Cart;