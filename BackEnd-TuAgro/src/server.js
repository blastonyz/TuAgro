import http from 'http';
import configuration from './config/configuration.js';
import app from './app.js';
import { connectionDB } from './db/mongoose.js';

await connectionDB();
const server =  http.createServer(app);
const PORT = configuration.port;

console.log('url callback: ', configuration.googleCallback);


server.listen(PORT, ()=>{console.log(`Server runing on port:${PORT} `)});