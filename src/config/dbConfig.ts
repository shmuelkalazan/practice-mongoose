import mongoose from 'mongoose'
const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/new_mongoose')
        console.log("successfully connected to mongo")
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    connectToMongo
}