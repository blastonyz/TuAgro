import CartModel from "../models/carts.model.js"

export default class CartDao {
    async get(){
        return await CartModel.find();
    }

    async getCart(cartId){
        return await CartModel.findById(cartId)
    }

    async createCart({}){
        return await CartModel.create({});
    }

    async update(cid,update){
        console.log('dao update:', update)
        try {
            const updatedCart = await CartModel.findByIdAndUpdate(
              cid,
              { $set: { products: update } },
              { new: true } 
            );
        
            if (!updatedCart) {
              return { message: "Carrito no encontrado", status: 404 };
            }
        
            return {
              message: "Carrito actualizado",
              data: updatedCart
            };
          } catch (error) {
            console.error(error);
            return { message: "Error al actualizar el carrito", error: error.message };
          }
    }

    async delete(_id){
        return await CartModel.deleteOne({_id});
    }
    async getPopulate(_id){
        return   await CartModel.findById(_id).populate('products.productId')
    }
}