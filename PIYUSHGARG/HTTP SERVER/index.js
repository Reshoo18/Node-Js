
const express=require('express');

const app=express();
app.get('/',(req,res)=>{
    return res.send('hello from home page')
})

app.get('/about',(req,res)=>{
    return res.send('the page is for about' +"hey"+req.query.name+"age"+req.query.age)
})


function myHandler(req,res){

}


app.listen(8000,()=>{console.log("server started")})