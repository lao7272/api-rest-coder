import { Router } from "express";

import isAdmin from "../middleware/isAdmin.js";
import * as BoxController from "../controllers/products.controller.js";


import { validateProduct } from "../middleware/joiValidate.js";

const productsRouter = Router();

productsRouter
.get('/', BoxController.getProducts)
.get('/:id', BoxController.getProductById)
.get('/category/:category', BoxController.getProductsByCategory)
.post('/', isAdmin, validateProduct, BoxController.createProduct)
.put('/:id', isAdmin, validateProduct, BoxController.updateProduct)
.delete('/:id', isAdmin, BoxController.deleteProduct);

export default productsRouter;

