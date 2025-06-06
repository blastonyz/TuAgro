import { Router } from "express";
import CartsController from "../controller/carts.controller.js";
import OrdersController from "../controller/orders.controller.js";

const router = Router();

const cartsController = new CartsController()
const orderController = new OrdersController()

router.get('/cartlist', async (req,res)=> {
    const cartlist = await cartsController.get()
    console.log('list ok');
    
    res.status(200).json(cartlist)
})

router.get('/cart/:cid',async (req,res) => {
    const {cid} = req.params
    console.log(cid)
    const userCart = await cartsController.getCart(cid)
    console.log('router get: ',userCart);
    
    res.status(200).json(userCart)
})

router.post('/cart',async (req,res)=>{
    const {cid,products} = req.body
    console.log('req: ',req.body);
    
    const updated = await cartsController.updateCart(cid,products)
    res.status(200).json({message:'actualizado',updated})
})

router.put('/cart/order', async (req,res)=>{
    try {
          const order = req.body
    console.log('body: ',order);
    const newOrder = await orderController.createOrder(order)
    res.status(201).json({message:'orden creada con exito',newOrder})
    
    } catch (error) {
        console.error('Error al procesar la orden:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
  
})

export default router