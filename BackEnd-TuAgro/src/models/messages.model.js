import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    consult: {type: String, required: true}
})

export default  mongoose.model('Messages',MessagesSchema);