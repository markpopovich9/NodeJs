import express from "express"
import { postController } from "./Post.controller"

const router = express.Router()

router.get("/posts", postController.getSlicedPosts)
router.get("/posts/:id", postController.getPostById)
router.post("/posts", postController.addToJson)
router.patch("/posts/:id", postController.updatePost)
export default router