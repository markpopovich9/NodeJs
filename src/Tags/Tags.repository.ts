
import { IRepositoryContract } from "./Tags.types"
import { client } from "../client/client"


export const TagRepository: IRepositoryContract = {
    getTags: async(paramsObj) => {
        try{
            const { skip, take } = paramsObj.params;
            const findArgs: any = {};
            if (skip !== undefined) findArgs.skip = Number(skip);
            if (take !== undefined) findArgs.take = Number(take);
            const tags = await client.tag.findMany(findArgs)
            return tags
        }catch(error){
            throw error
        }
    },
    getTagsById: async(tagIdObj) => {
        try{
            const tagId = tagIdObj
            const tag = await client.tag.findUnique({
                where: {
                    id: tagId
                }
            })
            return tag
        }catch (error){
            throw error
        }
    }
}