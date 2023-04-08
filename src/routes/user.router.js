import { Router } from "express";
import { validateUser } from "../middleware/joiValidate.js";
import * as UserController from "../controllers/user.controller.js"
const userRouter = Router();

userRouter.post('/register', validateUser, UserController.registerUser)
.post('/login', UserController.loginUser)
.post('/logout', UserController.logoutUser);

export default userRouter;

