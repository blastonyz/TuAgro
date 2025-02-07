import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true,index: true},
    code: {type: Number, required: true},
    stock: {type: Number, required: true},
    statusP: {type: Boolean, required: true},
    thumbnail: {type: Array},
    owner:{type: mongoose.Schema.Types.ObjectId, ref: 'Session'}
},
{timestamps: true}
)

export const ProductModel = mongoose.model('Product',ProductSchema);
