import { Router } from "express"
import { userController } from "./User.controller"

const userRouter = Router();

userRouter.post("/user/registration", userController.registration)
userRouter.post("/user/login", userController.login)
userRouter.get("/user/me", userController.me)

export default userRouter