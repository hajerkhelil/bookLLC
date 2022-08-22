
const  express= require('express')
const connectDB = require('./config/ConnectDB')
const AuthRoute = require('./routes/auth')
const BookRoute= require('./routes/book')
require('dotenv').config()

const  app=express()

connectDB()
app.use(express.json())
app.use('/api/authe', AuthRoute) 
app.use('/api/book', BookRoute)


app.listen(process.env.port, ()=> console.log(`sever is running on port ${process.env.port}`))