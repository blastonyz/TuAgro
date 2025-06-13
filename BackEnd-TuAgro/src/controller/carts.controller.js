import CartService from "../services/cart.service.js"

export default class CartsController {
    constructor() {
        this.cartServices = new CartService()
    }

    async get() {
        return this.cartServices.get()
    }

    async getCart(cid) {
        try {
            const cart = await this.cartServices.getCart(cid)
            console.log('controller cart: ', cart);

            return cart
        } catch (error) {
            console.log('controller error: ', error);

        }

    }

    async updateCart(cid, data) {
        return await this.cartServices.updateCart(cid, data)
    }

    async resetCart(cid){
        return await this.cartServices.resetCart(cid)
    }
}