import { Router } from "express";
import UsersController from '../controller/users.controller.js';
import { verifyToken } from "../middlewares/jwt.js";

const router = Router();

const usersController = new UsersController()

router.post('/register',async (req, res)=> {
    const user = req.body
    console.log(user);
    const newUser = await usersController.createUser(user)
    console.log(newUser);
    res.json(newUser)
})

router.post('/login', async (req,res) => {
    const userData = req.body
    try {
        const userToken = await usersController.logInUser(userData.email,userData.password)
        res.header('Authorization',userToken).json({message: 'succesfull logged',userToken})

    } catch (error) {
        console.error(error.msg)
    }
})

//ruta protegida de prueba
router.get('/protected', verifyToken(usersController),async (req,res) => {
    res.json({ message: "Acceso permitido", user: req.user });
})

export default router