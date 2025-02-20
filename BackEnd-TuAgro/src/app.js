import express from "express";
import cors from "cors";
import ProductsController from "./controller/products.controller.js"
import CategoryController from "./controller/category.controller.js";

const app = express();
app.use(cors({
  origin: 'http://localhost:8081', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//app.use(express.static(path.join(__dirname,'../public')));

const categoryController = new CategoryController()
const productsController = new ProductsController()

app.get('/products', async (req, res) => {
  const products = await productsController.get({});
  console.log(products);
  const productsJSON = JSON.stringify(products);
  console.log(productsJSON);

  res.send(productsJSON)

});

app.get('/products/:category', async (req, res) => {
  const {category} = req.params
  console.log('params',category);
  
  const categoryProducts = await productsController.getByCategory(category);

  const productsJSON = JSON.stringify(categoryProducts);;

  res.send(productsJSON)

});

app.get('/categories', async (req, res) => {

  const categories = await categoryController.get();
  const categoriesJSON = JSON.stringify(categories);
  res.send(categoriesJSON)

});

app.get('/product/:pid', async (req, res) => {
  const { pid } = req.params;
  console.log('id: ', pid);
  const product = await productsController.getById(pid);
  console.log('getId: ', product);
  res.send(product)

});

export default app;