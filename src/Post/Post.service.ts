import { PrismaClient } from "@prisma/client";
import { IPostService, UpdatePostData } from "./Post.types";
const prisma = new PrismaClient();
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

    },
    deletePostById(id: string) {
    try {
      const numId = Number(id);

      if (isNaN(numId)) {
        return { status: "error", message: "Некорректный ID" };
      }

      const deletedPost =  prisma.post.delete({
        where: { id: numId },
      });

      return { status: "ok", data: deletedPost };
    } catch (error: any) {
      if (error.code === "P2025") {
        return { status: "error", message: "Пост не найден" };
      }

      return { status: "error", message: "Ошибка при удалении поста" };
    }
  },
};
