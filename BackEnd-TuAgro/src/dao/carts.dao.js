import CartModel from "../models/carts.model.js"

export default class CartDao {
    async get(){
        return await CartModel.find();
    }

    async getCart(cartId){
        return await CartModel.findById(cartId);
    }

    async createCart({}){
        return await CartModel.create({});
    }

    async update(_id,update){
        return await CartModel.updateOne({_id},update);
    }

    async delete(_id){
        return await CartModel.deleteOne({_id});
    }
    async getPopulate(_id){
        return   await CartModel.findById(_id).populate('products.prodId')
    }
}