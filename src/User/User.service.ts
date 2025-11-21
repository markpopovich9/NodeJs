import { userRepository } from "./User.repository";
import { IServiceContract } from "./User.types";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ENV } from "../config/env";

export const userService : IServiceContract = {
    createUser: async(data)=>{

        const hashedPassword = await hash(data.password, 10)
        const dataWithHashedPassword = {...data, password: hashedPassword}
        const alrcreatedUser = await userRepository.createUser(dataWithHashedPassword)
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
        const isMatch = await compare(data.password, findUser.password)
         if (!(isMatch)){return "Password is incorrect!"}
        const token = sign({id: findUser.id}, ENV.SECRET_KEY, { expiresIn: "7d" })
        return { token }},
        me: async(id)=>{
            const findUser = await userRepository.findByIdWithoutPassword(id)
            if (!findUser){return "Cannot find user"}
        return findUser
    },

}