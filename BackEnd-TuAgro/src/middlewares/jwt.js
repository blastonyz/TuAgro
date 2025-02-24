import jwt from 'jsonwebtoken'
import configuration from '../config/configuration.js'





export const sessionToken = async (user) => {
    const payload = {userId: user._id.toString()}
    console.log('token: ', payload.userId);
    return jwt.sign(payload,configuration.jwt_secret,{
        expiresIn:'10m'
    })
}

//usar DTO
export const verifyToken = (usersController) => {
    return async (req, res, next) => {
        try {
            const authHeader = req.get('Authorization');
            console.log('Header recibido:', authHeader);

            if (!authHeader) return res.status(403).json({ message: 'unauthorized' });

            const token = authHeader.split(' ')[1];
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
    };
};