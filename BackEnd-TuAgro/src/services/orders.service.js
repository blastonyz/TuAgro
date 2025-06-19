import OrdersRepository from "../repository/order.repository.js";
import EmailServices from "./email.service.js";

export default class OrdersService{
    constructor(){
        this.ordersRepository = new OrdersRepository()
        this.emailServices = new EmailServices()
    }
    async get(){
        return this.ordersRepository.get()
    }

    async getByEmail(email){
        return this.ordersRepository.getByEmail(email)
    }

    async createOrder(order){
       try {
        const newOrder = await this.ordersRepository.createOrder(order)

        await this.emailServices.sendMail(
            order.client,
            'Gracias por realizar un pedido en TuAgro',
            `<p>Nuestro equipo se pondrá en contacto a la brevedad para avanzar en la compra</p>`
        )

        return newOrder
    } catch (err) {
        console.error("Error creando la orden:", err)
        throw new Error("Error interno creando la orden")
    }
    }

   
}