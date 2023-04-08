import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
    username: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max: 100},
    address: {type: String, required: true},
    tel: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

export default UsersSchema;