import { Request, Response } from "express"
import { postService } from "./Post.service"
import { UpdatePostData, IPostController } from "./Post.types"

const postController: IPostController = {
    getPostById: (req: Request, res: Response) => {
        const postId = req.params.id
        const response = postService.getPostById(postId)
        if (response == "error") {
            res.status(400).json("Thor: we analgave")
            return
        }
        res.status(200).json(response)
    },

    getSlicedPosts: (req: Request, res: Response) => {
        const skip = req.query.skip as string
        const take = req.query.take as string
        const filter = req.query.filter as string

        const response = postService.getSlicedPosts(skip, take, filter)

        if (response == "error") {
            res.status(400).json("Tonamni бути числа")
            return
        }
        res.status(200).json(response)
    },

    addToJson: (req: Request, res: Response) => {
        const requestBody = req.body
        const response = postService.addPostToJson(requestBody)

        if (response == "error") {
            res.status(400).json("error")
            return
        }
        res.status(200).json(response)
    },

    updatePost: (req: Request, res: Response) => {
        const id = req.params.id
        const data = req.body as UpdatePostData

        if (!id) {
            res.status(400).json("ID обязателен")
            return
        }
        if (Object.keys(data).length == 0) {
            res.status(400).json("Немає даних для оновлення")
            return
        }
        
        const response = postService.updatePostById(id, data)
        if (response == "error") {
            res.status(400).json("Thor: we analgave")
            return
        }
        res.status(200).json(response)
    }
}

export default postController