import CartRepository from "../repository/cart.repository.js";

export default class CartService{
    constructor(){
        this.cartRepository = new CartRepository()
    }

    async get(){
        return this.cartRepository.get()
    }

    async getCart(cid){
        
        const cart =  await this.cartRepository.getCart(cid)
        console.log('service populate cart: ',cart);
        return cart
            
    }

    async create(email){
        console.log('service: ',email);
        
        return await this.cartRepository.createCart(email)
    }

   async  updateCart(cid,data){
        return await this.cartRepository.updateCart(cid,data)
    }

    async resetCart(cid){
        return await this.cartRepository.resetCart(cid)
    }
}