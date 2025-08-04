import { Router } from "express";
import ProductsController from "../controller/products.controller.js";

const router = Router();

const productsController = new ProductsController()

router.get('/products', async (req, res) => {
  const products = await productsController.get({});
  const productsJSON = JSON.stringify(products);
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');
  res.send(productsJSON)
});

router.get('/products/:category', async (req, res) => {
  const { category } = req.params
  console.log('params', category);
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

router.post('/products/create', async (req, res) => {
  const product = req.body
  console.log('product body router: ', product);
  const formattedProduct = {
    ...product,
    price: Number(product.price),
    stock: Number(product.stock),
  };
  const newProduct = await productsController.create(formattedProduct)
  res.status(201).json({ message: 'producto creado', newProduct })
})

router.put('/product/edit/:pid', async (req, res) => {
  const { pid } = req.params
  const updateProduct = req.body
  console.log('pid: ', pid);
  console.log('put body: ', updateProduct);

  const update = await productsController.update(pid, updateProduct)
  res.status(201).json({ message: 'producto actualizado', update })
})

router.delete('/product/:pid', async (req, res) => {
  const { pid } = req.params;
  console.log('id: ', pid);
  const deleteProduct = await productsController.delete(pid)
  console.log('delete: ', deleteProduct);

  res.status(200).json({ message: 'producto borrado', deleteProduct })
})

export default router;
