import { UserModel } from "../models/userModel"

const createUser = async (user:any) =>{
    try {
        const dbUser = new UserModel({user_name:user.user_name})
        await dbUser.save()
        console.log("user saved successfully")
    } catch (err) {
        console.log(err)
        throw err
    }
}

export {
    createUser,
}
