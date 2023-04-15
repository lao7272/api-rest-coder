import { Router } from "express";
import isAuth from '../middleware/isAuth.js'
import * as CartController from "../controllers/cart.controller.js"

const cartRouter = Router();

cartRouter
.get("/", isAuth, CartController.getCarts)
.get('/:id', isAuth, CartController.getCartById)
.post('/', isAuth, CartController.createCart)
.post('/:cartId/product/:productId', isAuth, CartController.addProductToCart)
.delete('/:id', isAuth, CartController.deleteCart)
.delete('/:cartId/product/:productId', isAuth, CartController.removeProduct);

export default cartRouter;