import CartService from "../services/cart.service.js"

export default class CartsController{
    constructor(){
        this.cartServices = new CartService()
    }

    async get(){
        return this.cartServices.get()
    }

    async getCart(cid){
        const cart = await this.cartServices.getCart(cid)
        return cart
    }

    async updateCart(cid,data){
        return await this.cartServices.updateCart(cid,data)
    }

}