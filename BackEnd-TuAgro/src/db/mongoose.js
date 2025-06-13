import mongoose from 'mongoose';
import configuration from '../config/configuration.js';

export const connectionDB = async ( ) => {
    try {
        const URI = configuration.mongoDbUri;
        await mongoose.connect(URI);
        console.log('Database connected');
    } catch (error) {
        console.error('error al conectarse a db');
    }
}
