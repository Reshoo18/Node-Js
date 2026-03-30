const cookieParse=require('cookie-parser')
const express=require('express');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const app=express()
app.use(cookieParse())
const PORT=3000


//bcrypt

// app.get('/',function (req,res){
//     bcrypt.genSalt(10,function(err,salt){
//       bcrypt.hash("helooooo",salt,function(err,hash){
//         console.log(hash)
//         res.send("this is home page also")
//       });
//     });
// });



// cookies

// app.get('/read',(req,res)=>{
//     console.log(req.cookies)  
//     res.send("this is read page")
// })

//JWT
//encryption
app.get('/',(req,res)=>{
    const token=jwt.sign({"rmail":"reshooranjan7@gmail.com"},"secret")
    res.cookie("token",token)
    res.send("this is for jwt")
})
//decryption
app.get('/read',(req,res)=>{
    const data=jwt.verify(req.cookies.token,"secret")
    console.log(data)
    res.send("this is for jwt decryption")
})


app.listen(PORT,()=>{
    console.log(`server at listening the port ${PORT}`)
})