import { Router } from "express";
import CartsController from "../controller/carts.controller.js";

const router = Router();

const cartsController = new CartsController()

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

export default router