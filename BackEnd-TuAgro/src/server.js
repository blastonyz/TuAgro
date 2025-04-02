import http from 'http';
import configuration from './config/configuration.js';
import app from './app.js';
import { connectionDB } from './db/mongoose.js';

await connectionDB();
const server =  http.createServer(app);
const PORT = configuration.port;
const HOST = configuration.host
//init(server);


server.listen(PORT,HOST, ()=>{console.log(`Server runing on port:${HOST}:${PORT} `)});