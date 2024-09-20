import express from "express";
import cors from "cors";
import ProductsController from "./controller/products.controller.js"
const app = express();
app.use(cors({
    origin: 'http://localhost:8081', // Cambia esto según el origen de tu frontend
    methods: ['GET', 'POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
  }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//app.use(express.static(path.join(__dirname,'../public')));
app.get('/',async (req,res) =>{
    const products = await ProductsController.get({});
    console.log(products);
    const productsJSON = JSON.stringify(products);
    console.log(productsJSON);
    
    res.send(productsJSON)
    
});

export default app;