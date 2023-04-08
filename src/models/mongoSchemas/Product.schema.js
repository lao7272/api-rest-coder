import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    thumbnail: {type: String, required: true},
    description: {type: String, required: true},
    stock: {type: Number, required: true},
    quant: {type: Number, required: true},
    category: {type: String, required: true}
});

export default ProductSchema;