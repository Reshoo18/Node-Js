const express=require('express')
const userModel=require('./userModel.js')

const app=express()

const PORT=3000;

app.get('/',(req,res)=>{
    res.send("this is the home page")
})

app.get('/create',async (req,res)=>{
   let createdUser=await userModel.create({
    name:"reshoo",
    username:"reshooranja",
    email:"reshoo123@gmail.com"
   })
   res.send(createdUser)
})

app.listen(PORT,()=>{
    console.log(`server at running this port: ${PORT}`)
})