import { Router } from "express";
import UsersController from '../controller/users.controller.js';
import { verifyToken } from "../middlewares/jwt.js";
import configuration from "../config/configuration.js";
import {OAuth2Client} from'google-auth-library'


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
      //  console.log('router, controller resp: ',userAndToken);
        
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

//google-oauth
 
const oAuth2Client = new OAuth2Client(
    configuration.client_id,
    configuration.client_secret,
    "http://localhost:8080/auth/google/callback"
  );

router.get('/auth/google', async (req,res) => {

    const authorizeUrl =  oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope:['profile', 'email'],
      });
      res.redirect(authorizeUrl)
})
//callback url

router.get('/auth/google/callback', async (req,res) => {
    try {
        const { code } = req.query;
        const { tokens } = await oAuth2Client.getToken(code);
       oAuth2Client.setCredentials(tokens);
     //   console.log('tokens: ',tokens);
        
        // Obtener información del usuario
        const userInfo = await oAuth2Client.request({
            url: "https://www.googleapis.com/oauth2/v3/userinfo",
        });
       
        // Guardar en cookies (opcional)
        //

        //jwt con session id
        const data = {first_name: userInfo.data.given_name, last_name: userInfo.data.family_name, email: userInfo.data.email} 
        console.log('userInfo: ',data);
        
        const token = await usersController.googleUser(data)
        console.log('token2: ',token);
        const editedToken = `authToken=${token}`
        // Enviar respuesta con datos del usuario
        res.cookie('authToken',editedToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 60 * 60 * 1000
        }).redirect('http://localhost:3000');
    } catch (error) {
        console.error("Error en autenticación:", error);
        res.status(500).json({ error: "Error al autenticar con Google" });
    }
})



router.get('/verify-session', verifyToken(usersController), async (req, res) => {
    try {
        const user = req.user; // Accede al usuario adjuntado por el middleware
        //console.log('Usuario en verify-session:', user);

        if (!user) {
            return res.status(401).json({ message: "Invalid session" });
        }

        res.json({ message: "Session active", user });
    } catch (error) {
        console.error('Error en verify-session:', error);
        res.status(500).json({ message: "Error verifying session" });
    }

});

//ruta protegida de prueba
router.get('/protected', verifyToken(usersController), async (req, res) => {
    console.log('accedio');

    res.json({ message: "Acceso permitido", user: req.user });
})

export default router