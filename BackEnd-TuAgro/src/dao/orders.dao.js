import OrderModel from '../models/orders.model.js'

export default class OrdersDao{
    async get(){
        return OrderModel.find()
    }

    async getByEmail(email){
        return OrderModel.findOne(email)
    }

    async createOrder (order){
        return OrderModel.create(order)
    }

    
}