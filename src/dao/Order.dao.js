import MongoDBContainer from '../database/MongoDB.database.js';
import OsderSchema from '../models/mongoSchemas/Order.schema.js';
class Order extends MongoDBContainer {
    constructor(){
        super('orders', OsderSchema);
    }
}
export default Order;
