const cookieParse=require('cookie-parser')
const express=require('express');
const bcrypt=require('bcrypt')

const app=express()
app.use(cookieParse())
const PORT=3000

app.get('/',function (req,res){
    bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash("helooooo",salt,function(err,hash){
        console.log(hash)
        res.send("this is home page also")
      });
    });
});
// app.get('/read',(req,res)=>{
//     console.log(req.cookies)  
//     res.send("this is read page")
// })

app.listen(PORT,()=>{
    console.log(`server at listening the port ${PORT}`)
})