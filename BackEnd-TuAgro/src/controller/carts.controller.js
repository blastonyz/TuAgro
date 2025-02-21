import CartDao from "../dao/carts.dao";

export default class CartsController{
    static async getCart(cid){
        const cart = await CartDao.getCart(cid)
        return cart
    }
}