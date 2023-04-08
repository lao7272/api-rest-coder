import MongoDBContainer from '../database/MongoDB.database.js';
import ChatSchema from '../models/mongoSchemas/Chat.schema.js';
class Chat extends MongoDBContainer {
    constructor(){
        super('chats', ChatSchema);
    }
}
export default Chat;