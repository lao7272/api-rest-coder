import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
    orderNumber: {type: String, required: true, unique: true},
    email: {type: String, required: true, max: 100},
    timestamp: {type: Date, required: true},
    status: {type: String, required: true, default: "processing"},
    products: [{
        name: {type: String, required: true, max: 100},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        quant: {type: Number, required: true},
    }]
});

export default OrdersSchema;