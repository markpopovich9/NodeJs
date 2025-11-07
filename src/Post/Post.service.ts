
import { PrismaClient } from "../generated/prisma";
import { IPostService, UpdatePostData } from "./Post.types";
const prisma = new PrismaClient();
export const postService: IPostService = {
    getPostById: (postId: string) => {
        const response = { status: "ok", id: postId }
        return response
    },

    getSlicedPosts: (skip: string, take: string, filter: string) => {
        const response = { status: "ok", skip, take, filter }
        return response
    },

    addPostToJson: (requestBody: any) => {
        const response = { status: "ok", data: requestBody }
        return response
    },

    updatePostById: (id: string, updateData: UpdatePostData) => {
        const response = { status: "ok", id, updateData }
        return response

    },
    deletePostById(id: string) {
   
      const numId = Number(id);



      const deletedPost =  prisma.post.delete({
        where: { id: numId },
      });

      return { status: "ok", data: deletedPost };
    } 

};

