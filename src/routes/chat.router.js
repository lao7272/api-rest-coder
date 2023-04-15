import { Router } from "express";
const chatRouter = Router();
import * as ChatController from '../controllers/chat.controller.js'

chatRouter.get("/", ChatController.renderChat);
chatRouter.get('/:email', ChatController.getUserChat);

export default chatRouter