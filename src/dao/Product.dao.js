import MongoDBContainer from '../database/MongoDB.database.js';
import ProductSchema from '../models/mongoSchemas/Product.schema.js';
import { logger } from '../modules/logger.js';
class Product extends MongoDBContainer {
    constructor(){
        super('products', ProductSchema);
    }
    async getByCategory(category){
        try {
            return await this.collection.find({category: category});
        } catch (err) {
            logger.error(`Dao error: ${err}`);
        }
    }
}
export default Product;
