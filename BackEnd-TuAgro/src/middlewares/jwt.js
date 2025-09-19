import jwt from 'jsonwebtoken'
import configuration from '../config/configuration.js'

export const sessionToken = async (user) => {
    const payload = { userId: user._id.toString() }
    console.log('sesionIDtoken: ', payload.userId);
    return jwt.sign(payload, configuration.jwt_secret, {
        expiresIn: '5m'
    })
}

//usar DTO
export const verifyToken = (usersController) => {
    return async (req, res, next) => {

        let token;

        if (req.cookies?.authToken) {
            token = req.cookies.authToken;
        }
        else if (req.headers.authorization?.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }

        try {

            console.log('middleware token: ', token);

            if (!token) {
                return res.status(401).json({ message: "No authentication token" });
            }

            const decodedToken = jwt.verify(token, configuration.jwt_secret);

            const user = await usersController.getById(decodedToken.userId.toString());

            if (!user) {
                return res.status(403).json({ message: 'user does not exist' })
            }

            req.user = user;
            next();
        } catch (error) {
            console.error('Error en verifyToken:', error);
            return res.status(403).json({ message: 'unauthorized' });
        }
    }
};

export const decodedToken = async (token) => {
    try {
        const decoded = jwt.verify(token, configuration.jwt_secret);
        console.log("Token decodificado:", decoded);
        return decoded
    } catch (error) {
        if (error.name === "TokenExpiredError") {

            return { error: "expired" };
        } else {

            return { error: "invalid" };
        }
    }

}