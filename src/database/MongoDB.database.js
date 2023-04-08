import mongoose from "mongoose";
import vars from "../config/config.js";
import { logger } from "../modules/logger.js";

const { URI } = vars;

class MongoDBContainer {
    constructor(collectionName, schema){
        this.collection = mongoose.model(collectionName, schema);
        this.connect();
    }

    async connect () {
        try {
            mongoose.connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000
            });
        } catch (err) {
            logger.error(`MongoDB error: ${err}`);
        }
    }
    
    /* CREATE */

    async save(object){
        try {
            return await this.collection.create(object);
        } catch (err) {
            logger.error(`MongoDB error: ${err}`);
        }
    }

    /* READ */

    async getAll(){
        try {
            return await this.collection.find({});
        } catch (err) {
            logger.error(`MongoDB error: ${err}`);
        }
    }
    async getById(id){
        try {
            return await this.collection.findOne({_id: id }); 
        } catch (err) {
            logger.error(`MongoDB error: ${err}`);
        }
    }

    /* UPDATE */

    async update(id, object){
        try {
            await this.collection.updateOne({_id: id}, {$set: object});
        } catch (err) {
            logger.error(`MongoDB error: ${err}`);
        }
    }

    /* DELETE */
    async deleteById(id){
        try {
            return await this.collection.deleteOne({_id: id }); 
        } catch (err) {
            logger.error(`MongoDB error: ${err}`);
        }
    }
    async deleteAll(){
        try {
            await this.collection.deleteMany({}); 
        } catch (err) {
            logger.error(`MongoDB error: ${err}`);
        }
    }
    
}

export default MongoDBContainer;
