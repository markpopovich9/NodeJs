import { Router } from "express"
import { userController } from "./User.controller"
import { AuthMiddleware } from "../middlewares/auth-middleware";
const userRouter = Router();

userRouter.post("/user/registration", userController.registration)
userRouter.post("/user/login", userController.login)
userRouter.get("/user/me", userController.me)
userRouter.get("/user/me",AuthMiddleware, userController.me)
export default userRouter