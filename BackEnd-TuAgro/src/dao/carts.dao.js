import CartModel from "../models/carts.model.js"

export default class CartDao {
    async get(){
        return await CartModel.find().populate('products.productId');
    }

    async getCart(cartId){
        return await CartModel.findById(cartId)
    }

    async createCart(email){
      console.log('dao: ',email);
      
        return await CartModel.create({email});
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

    async resetCart(cid){
         try {
            const updatedCart = await CartModel.findByIdAndUpdate(
             { _id: cid},
              { $set: { products: [] } },
              { new: false } 
            );
        
            if (!updatedCart) {
              return { message: "Carrito no encontrado", status: 404 };
            }
        
            return {
              message: "Cart Restarted",
              data: updatedCart
            };
          } catch (error) {
            console.error(error);
            return { message: "Error at restart cart", error: error.message };
          }
    }
    async getPopulate(_id){
        return   await CartModel.findById(_id).populate('products.productId')
    }
}