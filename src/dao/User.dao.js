import mongoose from 'mongoose';
import MongoDBContainer from '../database/MongoDB.database.js';
import UserSchema from '../models/mongoSchemas/User.schema.js';
import { logger } from '../modules/logger.js';

const URI = 'mongodb://127.0.0.1:27017/ecommerce';

class User extends MongoDBContainer {
    constructor() {
        super('users', UserSchema);
    }
    async getUserByEmail(email) {
        try {
            return await this.collection.findOne({email: email});
        } catch (err) {
            logger.error(`Dao error: ${err}`);
        }
    }
}
export default User;