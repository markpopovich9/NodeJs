import {client} from "../client/client";
import { IPostRepository } from "./Post.types";


export const postRepository: IPostRepository = {
    findMany: async (skip = 0, take = 10) => {
        return await client.post.findMany({ skip, take });
    },
    findById: async (id: number) => {
        return await client.post.findUnique({ where: { id } });
    },
    create: async (data: { title: string; content: string }) => {
        return await client.post.create({ data })},
    update: async (id: number, data: Partial<{ title: string; content: string }>) => {
        return await client.post.update({ where: { id }, data });
    },
}; 