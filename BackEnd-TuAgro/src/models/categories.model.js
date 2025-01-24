import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
    title: {type: String, index: true, required:true},
    image: {type: String, required: true}
},
{timestamp: true})

export const CategoryModel = mongoose.model('Category',CategorySchema)