import express from "express";
import { logger } from "./modules/logger.js";
import { Server as socketio } from "socket.io";

/* ROUTES */ 

import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";
import userRouter from "./routes/user.router.js";
import orderRouter from "./routes/order.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');



app.get('/',(req, res) => {
    res.json({message: `Welcome User`});
});

app.use('/api', userRouter);
app.use('/api/products', productsRouter); 
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);


app.all('*', (req, res) => {
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    logger.warn(`Page not found:  URL: ${fullUrl}, METHOD: ${req.method}`);
    res.json({status: 404, message: 'Page not found'});
});

export default app;