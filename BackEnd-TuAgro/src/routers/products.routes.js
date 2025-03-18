import { Router } from "express";
import ProductsController from "../controller/products.controller.js";

const router = Router();

const productsController = new ProductsController()

router.get('/products', async (req, res) => {
    const products = await productsController.get({});
    const productsJSON = JSON.stringify(products);

    res.send(productsJSON)
  });
  
 router.get('/products/:category', async (req, res) => {
    const {category} = req.params
    console.log('params',category);
    const categoryProducts = await productsController.getByCategory(category);
    const productsJSON = JSON.stringify(categoryProducts);;
  
    res.send(productsJSON)
  
  });

 router.get('/product/:pid', async (req, res) => {
    const { pid } = req.params;
    console.log('id: ', pid);
    const product = await productsController.getById(pid);

    res.send(product)
  
  });

  export default router;
  