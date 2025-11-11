import { userRepository } from "./User.repository";
import { IServiceContract } from "./User.types";



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
        if (!(data.password === findUser.password)){
            return "Password is incorrect!"
        }
        return findUser
    }
}