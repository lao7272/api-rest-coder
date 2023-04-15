import MongoDBContainer from '../database/MongoDB.database.js';
import ChatSchema from '../models/mongoSchemas/Chat.schema.js';
class Chat extends MongoDBContainer {
    constructor(){
        super('chats', ChatSchema);
    }
    async getMessagesByEmail(email) {
        try {
            return await this.collection.find({email: email})
        } catch (err) {
            logger.error(`Dao error: ${err}`);
        }
    }
}
export default Chat;