const express=require('express')

const app=express();
const connectDb=require('./config/db.js')
require('dotenv').config();
connectDb();

const bodyParser=require('body-parser')
app.use(bodyParser.json())

const PORT=process.env.PORT ||3000;


const studentRoutes=require('./routes/studentRoutes.js')

app.use('/student',studentRoutes)

app.listen(PORT,()=>{
    console.log(`server at listening this port: ${PORT}`)
})