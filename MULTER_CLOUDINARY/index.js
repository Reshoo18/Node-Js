const express =require('express')
const dotenv=require('dotenv')
dotenv.config();
const app=express(); 

const fileRouter=require('./routes/fileRoutes.js')
app.use(express.json());

app.use('/',fileRouter)
const PORT=3000;

app.get('/',(req,res)=>{
    res.send(" this is homepage");
})

app.listen(PORT,()=>{
    console.log(`server are runing at port : ${PORT}`)
})