import { Router } from "express";
import MessagesController from "../controller/messages.controller.js";

const router = Router()

const messageController = new MessagesController()

router.get('/consults', async (req,res) => {
    try {
        const consultsList = await messageController.get()
        console.log('solicitando consutlas');
        console.log('lista: ',consultsList);
        
         res.status(201).json({consultsList})
    } catch (error) {
           console.error('Error al recibir mensaje:', err);
        res.status(500).json({ message: 'Error al solicitar consutlas' });
    }
})

router.put('/consults',async (req,res)=> {
    try {
            const consult = req.body
    console.log('consulta: ',consult)
    const newConsult = await messageController.createMessage(consult)
    res.status(201).json({message:'consulta guardada',newConsult})
    } catch (error) {
        console.error('Error al recibir mensaje:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }

})

export default router