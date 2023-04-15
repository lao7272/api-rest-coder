import express from "express";
import { logger } from "./modules/logger.js";
import { createServer } from "http";
import chatSocket from "./modules/socketio.js";

/* ROUTES */ 

import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";
import userRouter from "./routes/user.router.js";
import orderRouter from "./routes/order.router.js";
import chatRouter from "./routes/chat.router.js"

const app = express();

app.set('views engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/',(req, res) => {
    res.json({message: `Welcome User`});
});

app.use('/api', userRouter);
app.use('/chat', chatRouter);
app.use('/api/products', productsRouter); 
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);


app.all('*', (req, res) => {
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    logger.warn(`Page not found:  URL: ${fullUrl}, METHOD: ${req.method}`);
    res.json({status: 404, message: 'Page not found'});
});

const httpServer = createServer(app);

chatSocket(httpServer);


export default httpServer;