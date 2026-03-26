const express = require("express")
const app=express();
const PORT=3000;

//app.use(express.json())


// const loginMiddleWare=function (req,res,next){
//     console.log("LOGIN KAR RHA HU")
//     next();
// }
// app.use(loginMiddleWare)
// const authMiddleWare=function(req,res,next){
//     console.log("AUTH KAR RHA HU")
//     next();
// }
// app.use(authMiddleWare)

// const validationMiddleWare=function(req,res,next){
//     console.log("CHECK KAR RHA HU")
//     next();
// }
// app.use(validationMiddleWare)
app.get('/',(req, res)=>{
    console.log("mai router ka middleware hu")
    //console.log(req.body)
    res.send("hello world");
})
const route=require('./routes/routes.js')
app.use('/api',route)

app.listen(PORT,()=>{
    console.log(`SERVER AT LISTENING AT PORT ${PORT}`)
} )