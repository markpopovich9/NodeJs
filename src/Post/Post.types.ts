
import { Request, Response } from "express"

export interface IPost {
    id: number
    title: string
    content: string
    author: string
    createdAt: string
}

export type CreatePostData = Omit<IPost, 'id'>
export type UpdatePostData = Partial<Omit<IPost, 'id'>>

export interface IPostController {
    getPostById(req: Request, res: Response): void
    getSlicedPosts(req: Request, res: Response): void
    addToJson(req: Request, res: Response): void
    updatePost(req: Request, res: Response): void
}


export interface IPostService {
    getPostById(postId: string): any
    getSlicedPosts(skip: string, take: string, filter: string): any
    addPostToJson(requestBody: any): any
    updatePostById(id: string, updateData: UpdatePostData): any
}