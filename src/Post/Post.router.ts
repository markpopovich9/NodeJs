import express from "express"
import requestController from "./Post.controller"
import {AuthMiddleware} from "../middlewares/auth-middleware"

const postRouter = express.Router();


postRouter.get('/posts', requestController.getPosts)
postRouter.post('/posts',AuthMiddleware, requestController.createPost)
postRouter.get("/posts/:id",AuthMiddleware, requestController.getPostById)
postRouter.patch("/posts/:id",AuthMiddleware, requestController.updatePostById)
postRouter.delete("/posts/:id",AuthMiddleware, requestController.getPostById)

export default postRouter