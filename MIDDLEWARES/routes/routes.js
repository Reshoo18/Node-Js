const express=require("express")

const router=express.Router();

const authMiddleWare=function (req,res,next){
    console.log("mai aut user hu")
    req.user={userId:1,role:"student"};

    if(req.user){
        next();
    }else{
        res.json({success:false,
        message:"USER DOES'T EXIST"})
    }
}

const studentMiddeware=function(req,res,next){
    console.log("I am User Middleware");
   
    if(req.user.role==="student"){
        next();
    }else{
        res.json({
            success:false,
            message:"THIS IS ONLY FOR THE STUDENT"
        })
    }
}

const adminMiddleware=function (req,res,next){
     console.log("I am admin middleware");

     if(req.user.role==="admin"){
        next();
     }else{
        res.json({
            success:false,
            message:"THIS IS ONLY FOR THE ADMIN"
        })
     }
}


//routes

router.get("/student",authMiddleWare,studentMiddeware,(req,res)=>{
    console.log("I am the student page");
    res.send("the student specified")
})
router.get('/admin',authMiddleWare,adminMiddleware,(req,res)=>{
    console.log("this is the admin page");
    res.send("the admin specified page")
})

module.exports=router