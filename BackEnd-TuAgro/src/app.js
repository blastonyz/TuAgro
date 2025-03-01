import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'
import productRouter from './routers/products.routes.js'
import sessionRouter from  './routers/sessions.routes.js'
import CategoryController from "./controller/category.controller.js";

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use(express.static(path.join(__dirname,'../public')));

const categoryController = new CategoryController()

app.use('/',productRouter,sessionRouter)


app.get('/categories', async (req, res) => {

  const categories = await categoryController.get();
  const categoriesJSON = JSON.stringify(categories);
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('Pragma', ''); // Elimina la cabecera Pragma si existe
  res.setHeader('Expires', ''); // Elimina la cabecera Expires si e
  res.send(categoriesJSON)

});



export default app;