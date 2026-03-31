const express=require('express')
const userModel=require('./userModel.js')

const app=express()

const PORT=3000;

app.get('/',(req,res)=>{
    res.send("this is the home page")
})
//CRUD OPERATION
//CREATE
app.get('/create',async (req,res)=>{
   let createdUser=await userModel.create({
    name:"reshoo",
    username:"reshooranja",
    email:"reshoo123@gmail.com"
   })
   res.send(createdUser)
})

//Update
app.get('/update',async(req,res)=>{

    const updatedUser=  await userModel.findOneAndUpdate({username:"reshooranja"},{name:"reshoo ranjan"},{new:true})
    res.send(updatedUser)
})

app.get('/read', async(req,res)=>{
    const readUser= await userModel.find();
    res.send(readUser)
})

app.get('/delete', async(req,res)=>{
    const deleteUser= await userModel.findOneAndDelete({username:"reshooranja"});
    res.send(deleteUser)
})

app.listen(PORT,()=>{
    console.log(`server at running this port: ${PORT}`)
})