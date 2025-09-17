import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    longDescription: { type: String, required: true },
    price: { type: Number, required: true },
    shortDescription: { type: String, required: true },
    stock: { type: Number, required: true },
    title: { type: String, required: true },
    size: { type: [String], default : ["20","1000"]}
},
    { timestamps: true }
)

export const ProductModel = mongoose.model('Product', ProductSchema);
