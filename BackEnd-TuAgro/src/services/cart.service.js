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

    async create(data){
        return await this.cartRepository.createCart(data)
    }

   async  updateCart(cid,data){
        return await this.cartRepository.updateCart(cid,data)
    }

}