import jwt from 'jsonwebtoken'
import configuration from '../config/configuration.js'

export const sessionToken = (user) => {
    const payload = {userId: user._id.toString()}
    console.log('token: ', payload.userId);
    return jwt.sign(payload,configuration.jwt_secret,{
        expiresIn:'5m'
    })
}