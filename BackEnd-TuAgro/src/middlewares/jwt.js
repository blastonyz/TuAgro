import jwt from 'jsonwebtoken'
import configuration from '../config/configuration.js'


export const sessionToken = async (user) => {
    const payload = {userId: user._id.toString()}
    console.log('token: ', payload.userId);
    return jwt.sign(payload,configuration.jwt_secret,{
        expiresIn:'5m'
    })
}

//usar DTO
export const verifyToken = (usersController) => {
    return async (req, res, next) => {
    const authToken = req.cookies?.authToken;
 
    
        try {
  
            console.log('middleware token: ',authToken);
            
            if (!authToken) {
                return res.status(401).json({ message: "No authentication token" });
            }
            const token = authToken.split('=')[1];
            const decodedToken = jwt.verify(token, configuration.jwt_secret);
            console.log('Token decodificado:', decodedToken);

            const user = await usersController.getById(decodedToken.userId.toString());
            console.log('Usuario encontrado:', user);

            if (!user) return res.status(403).json({ message: 'user does not exist' });

            req.user = user;
            next();
        } catch (error) {
            console.error('Error en verifyToken:', error);
            return res.status(403).json({ message: 'unauthorized' });
        }
    }
};
