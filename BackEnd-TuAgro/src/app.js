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
app.get('/', async (req, res) => {
  const products = await ProductsController.get({});
  console.log(products);
  const productsJSON = JSON.stringify(products);
  console.log(productsJSON);

  res.send(productsJSON)

});

app.get('/categories', async (req, res) => {
  const categories = await CategoryController.get();
  console.log(categories);
  const categoriesJSON = JSON.stringify(categories);
  console.log(categoriesJSON);

  res.send(categoriesJSON)

});

app.get('/:pid', async (req, res) => {
  const { pid } = req.params;
  console.log('id: ', pid);
  const product = await ProductsController.getById(pid);
  console.log('getId: ', product);
  res.send(product)

});

export default app;