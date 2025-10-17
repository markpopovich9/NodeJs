import { IPostService, UpdatePostData } from "./Post.types"

export const postService: IPostService = {
    getPostById: (postId: string) => {
        const response = { status: "ok", id: postId }
        if (response.status === "error") {
            return "error"
        }
        return response
    },

    getSlicedPosts: (skip: string, take: string, filter: string) => {
        const response = { status: "ok", skip, take, filter }
        if (response.status === "error") {
            return "error"
        }
        return response
    },

    addPostToJson: (requestBody: any) => {
        const response = { status: "ok", data: requestBody }
        if (response.status === "error") {
            return "error"
        }
        return response
    },

    updatePostById: (id: string, updateData: UpdatePostData) => {
        const response = { status: "ok", id, updateData }
        if (response.status === "error") {
            return "error"
        }
        return response
    }
}