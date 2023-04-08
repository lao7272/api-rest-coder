import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
    email: {type: String, required: true},
    body: {type: String, required: true},
    timestamp: {type: Date, required: true},
    type: {type: String, required: true},
});

export default ChatSchema;