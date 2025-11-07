import { Request, Response } from "express"
import { postService } from "./Post.service"
import { UpdatePostData, IPostController } from "./Post.types"

export const postController: IPostController = {
    getPostById: (req: Request, res: Response) => {
        const postId = req.params.id
        const response = postService.getPostById(String(postId))
        res.status(200).json(response)
    },

    getSlicedPosts: (req: Request, res: Response) => {
        const skip = req.query.skip as string
        const take = req.query.take as string
        const filter = req.query.filter as string

        const response = postService.getSlicedPosts(skip, take, filter)

        
        res.status(200).json(response)
    },

    addToJson: (req: Request, res: Response) => {
        const requestBody = req.body
        const response = postService.addPostToJson(requestBody)
        res.status(200).json(response)
    },

    updatePost: (req, res) => {
        const id = req.params.id
        const data = req.body as UpdatePostData



        
        const response = postService.updatePostById(String(id),data )
        console.log(response);
        res.status(200).json(response)    

    },
    deletePost: async (req: Request, res: Response) => {
      const id = req.params.id;

      const response = await postService.deletePostById(String(id));



      res.status(200).json(response.data);
    }
    
  }



