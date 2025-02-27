import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required:true},
    address: {type: String},
    email: {type: String, required: true, index:true},
    age: {type: Number},
    password: {type: String},
    role: {type: String, default: 'user'},
    last_connection: {type: Date},
    cart:{type: mongoose.Schema.Types.ObjectId, ref: 'Carts'}
},
{timestamps: true}
)

export default  mongoose.model('Session',UserSchema);