import { userRepository } from "./User.repository";
import { IServiceContract } from "./User.types";

import { sign } from "jsonwebtoken";
import { ENV } from "../config/env";

export const userService : IServiceContract = {
    createUser: async(data)=>{
        const alrcreatedUser = await userRepository.createUser(data)
        if (!alrcreatedUser){
            return "error"
        }
        return alrcreatedUser

    },
    findUserByEmail: async(data)=>{
        const findUser = await userRepository.findUserByEmail(data.email)
        if (!findUser){
            return "error"
        }
        if (!(data.password === findUser.password)){return "Password is incorrect!"}
        const token = sign({id: findUser.id}, ENV.SECRET_KEY, { expiresIn: "7d" })
        return { token }},
        me: async(id)=>{
            const findUser = await userRepository.findByIdWithoutPassword(id)
            if (!findUser){return "Cannot find user"}
        return findUser
    },

}