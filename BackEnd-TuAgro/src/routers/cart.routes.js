import { Router } from "express";
import CartsController from "../controller/carts.controller.js";

const router = Router();

const cartsController = new CartsController()

router.post('/cart',async (req,res)=>{
    const {cid,products} = req.body
    console.log('req: ',req.body);
    
    const updated = await cartsController.updateCart(cid,products)
    res.status(200).json({message:'actualizado',updated})
})

export default router