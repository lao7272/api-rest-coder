import { Router } from "express"
import isAuth from "../middleware/isAuth.js"
import * as OrderController from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter
.get("/", isAuth, OrderController.getOrders)
.post("/", isAuth, OrderController.createOrder);

export default orderRouter;