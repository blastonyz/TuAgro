import { Command } from 'commander';
import dotenv from 'dotenv';

dotenv.config();

const program = new Command();


program
        .option('-d', 'Flag para Debug', false)
        .option('--mode <mode>', 'Modo de ejecucion: dev | production', 'production');
   
program.parse();
const mode = program.opts().mode;

const mongoDbUri = mode === 'dev' 
    ? process.env.MONGODB_URI_DEV  
    : process.env.MONGODB_URI; 

export default {
    debug: program.opts().d,
    mode: mode,
    mongoDbUri: mongoDbUri,
    port: process.env.PORT || 8080, 
    host: process.env.HOST,
    jwt_secret: process.env.JWT_SECRET,
    client_id:process.env.CLIENT_ID_GOOGLE,
    client_secret:process.env.CLIENT_SECRET_GOOGLE,
    mail: {
        emailServices: process.env.EMAIL_SERVICES || 'gmail',
        emailPort: process.env.EMAIL_PORT || 587,
        emailUser: process.env.EMAIL_USER,
        emailPassword: process.env.EMAIL_PASSWORD
    }
};
