import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products: {type: Array,requried:true},
    totalPrice: {type: Number, required:true},
    client: {type: String, required: true}
})


export default  mongoose.model('Orders',OrderSchema);