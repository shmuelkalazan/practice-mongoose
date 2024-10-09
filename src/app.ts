const exp = require('express')
// const dotenv = require('dotenv')
// const { connectToMongo } = require('./config/dbConfig')
// const cookieParser = require('cookie-parser')
// const { specs, swaggerUi } = require('./swagger');


const app = exp()
// dotenv.config()
// connectToMongo()

app.use(exp.json())

// app.use('/user',require('./routes/userRouter'))
// app.use('/todo',require('./routes/todoRouter'))

const port:string|undefined = process.env.PORT 
app.listen(port ,() => console.log(`server run on port ${port}`))
