import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    timestamp: {type: Date, required: true},
    address: {type: String, required: true},
    products: [{
        name: {type: String, required: true, max: 100},
        price: {type: Number, required: true},
        thumbnail: {type: String, required: true},
        description: {type: String, required: true},
        stock: {type: Number, required: true},
        quant: {type: Number, required: true},
        category: {type: String, required: true}
    }],
    active: {type: Boolean, required: true, default: true}
});
export default CartSchema;