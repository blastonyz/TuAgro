import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'
import productRouter from './routers/products.routes.js'
import sessionRouter from  './routers/sessions.routes.js'
import cartRouter from './routers/cart.routes.js';
import messageRouter from './routers/message.routes.js'
import ordersRouter from './routers/orders.routes.js'
import CategoryController from "./controller/category.controller.js";
import rateLimit from 'express-rate-limit'
import configuration from "./config/configuration.js";

const app = express();

app.set('trust proxy', true);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: { error: "Demasiadas solicitudes desde esta IP, intentá más tarde." },
  standardHeaders: true,
  legacyHeaders: false,
});

console.log('🌐 CALLBACK URL en producción:', configuration.googleCallback);


const allowedOrigins = [
  'http://localhost:3000',             
  'https://tu-agro.vercel.app',
  'https://www.tuagro.com.ar'         
];

app.use(cors({
  origin: allowedOrigins, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(limiter)

//app.use(express.static(path.join(__dirname,'../public')));

const categoryController = new CategoryController()

app.use('/',productRouter,sessionRouter,cartRouter,messageRouter,ordersRouter)


app.get('/categories', async (req, res) => {

  const categories = await categoryController.get();
  const categoriesJSON = JSON.stringify(categories);
  res.send(categoriesJSON)

});

export default app;