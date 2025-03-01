import { Router } from "express";
import UsersController from '../controller/users.controller.js';
import { verifyToken } from "../middlewares/jwt.js";

const router = Router();

const usersController = new UsersController()

router.post('/register', async (req, res) => {
    try {
        const user = req.body
        console.log(user);
        const newUser = await usersController.createUser(user)
        console.log(newUser);
        res.json(newUser)
    } catch (error) {
        console.log('router error: ',error);
        res.status(400).json({ error: error.message });
    }

})

router.post('/login', async (req, res) => {
    const userData = req.body
    try {
        const userAndToken = await usersController.logInUser(userData.email, userData.password)
        console.log('router, controller resp: ',userAndToken);
        
        res.cookie('authToken', userAndToken.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 60 * 60 * 1000
        }).json({ message: 'Successfully logged in', user: userAndToken.user });

    } catch (error) {
        res.clearCookie('authToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        }).status(401).json({ message: error.message });
    } 
})

//ruta protegida de prueba
router.get('/protected', verifyToken(usersController), async (req, res) => {
    console.log('accedio');

    res.json({ message: "Acceso permitido", user: req.user });
})

export default router