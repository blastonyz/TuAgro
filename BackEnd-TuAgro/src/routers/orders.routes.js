import { Router } from "express";
import OrdersController from "../controller/orders.controller.js";

const router = Router()

const ordersController = new OrdersController()

router.get('/orders', async (req, res) => {
    console.log('aqui ordenes');

    try {
        const orderList = await ordersController.get()
        console.log('ordenes: ',orderList);
        const ordersJson = JSON.stringify(orderList)
        res.status(200).send(ordersJson)
    } catch (error) {
        console.error('Error al solicitar ordenes de Compra:', error);
        res.status(500).json({ message: 'Error interno ruta ordenes de compras' });
    }

})

export default router