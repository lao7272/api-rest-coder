import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
    orderNumber: {type: Number, required: true},
    email: {type: String, required: true, max: 100},
    timestamp: {type: Date, required: true},
    status: {type: String, required: true, default: "complete"},
    products: [{
        name: {type: String, required: true, max: 100},
        price: {type: Number, required: true},
        thumbnail: {type: String, required: true},
        description: {type: String, required: true},
        stock: {type: Number, required: true},
        quant: {type: Number, required: true},
        category: {type: String, required: true}
    }]
});

export default OrdersSchema;