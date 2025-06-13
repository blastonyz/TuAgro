import OrdersService from "../services/orders.service.js";


export default class OrdersController{
    constructor(){
        this.ordersService = new OrdersService()
        
    }

    async get(){
        const orders = await this.ordersService.get()
        return orders
    }

    async getByEmail(email){
        const order = await this.ordersService.getByEmail(email)
        return order
    }
  
    async createOrder(order){
        const newOrder = await this.ordersService.createOrder(order)
        
        return newOrder    
    }
}