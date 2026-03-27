const express=require("express")

const users=require('./MOCK_DATA.json')

const app=express();

const PORT=3000;


app.get('/',(req,res)=>{
    res.send("this is the home page")
})

app.listen(PORT,()=>{
    console.log(`sever at listening the port ${PORT}`)
})