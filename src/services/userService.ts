// const bcrypt = require("bcrypt")
// const { UserModel } = require("../models/userModel")

// const createUser = async (user) =>{
//     try {
//         const {user_name , password ,role ,area ,units} = user
//         // const hashedPassword = await bcrypt.hash(password,10)
//         const dbUser = new UserModel({
//             user_name ,password: hashedPassword ,role ,area ,units
//         })
//         await dbUser.save()
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }

// module.exports = {
//     createUser,
// }
