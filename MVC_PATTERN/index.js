const express=require('express')
const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.send("this is the home page")
})


app.listen(PORT,()=>{
    console.log(`Server at listeing this port ${PORT}`)
})