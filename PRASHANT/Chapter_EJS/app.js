// External Module
const path =require('path')
const express = require('express');
const userRouter=require("./routes/userRouter")
const hostRouter=require("./routes/HostRouter")
const rootDir=require("./utils/pathUtils")



const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
   next();
})

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter)
app.use(express.static(path.join(rootDir,'public')))

app.use((req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','404.html')
       );
})



const PORT=3000;
app.listen(PORT,()=>{console.log(`Server Running at port :${PORT}`)})



