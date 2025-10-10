import { Request, Response } from "express"
import { postService } from "./Post.service"

const postController = {
  getPostById: (req: Request, res: Response) => {
    const postId = req.params.id
    const response = postService.getPostById(postId)

    if (response === "error") {
      res.status(400).json("пост не знайдено")
      return
    }

    res.status(200).json(response)
  },

  getSlicedPosts: (req: Request, res: Response) => {
    const skip = req.query.skip as string
    const take = req.query.take as string
    const filter = req.query.filter as string

    const response = postService.getSlicedPosts(skip, take, filter)

    if (response === "error") {
      res.status(400).json("повинні бути числа")
      return
    }

    res.status(200).json(response)
  },

  addToJson: (req: Request, res: Response) => {
    const requestBody = req.body
    const response = postService.addPostToJson(requestBody)

    if (response === "error") {
      res.status(200).json("error")
      return
    }

    res.status(200).json(response)
  }
}

export default postController