const { createUser } = require("../services/userService")

const register = async (req:any ,res:any) => {
    try {
        await createUser(req.body)
        res.status(201).json({
            msg:"user created"
        })
    } catch (err) {
        res.status(400).json(err)

    }
}