import { Router } from "express";
import UsersController from '../controller/users.controller.js';

const router = Router();

const usersController = new UsersController()

router.post('/register',async (req, res)=> {
    const user = req.body
    console.log(user);
    
    const newUser = await usersController.createUser(user)
    console.log(newUser);
    
    
    res.json(newUser)
})

export default router