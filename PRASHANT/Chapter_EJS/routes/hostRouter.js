
const path=require('path')

const express=require('express')

const rootDir=require("../utils/pathUtils")

const hostRouter=express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'views','addHome.html')
    );
    })
hostRouter.post("/add-home",(req,res,next)=>{
    console.log('HOME REGISTERED SUCCESSFULL',req.body)
      res.sendFile(path.join(__dirname,'../','views','homeAdded.html')
    );
})


module.exports=hostRouter;