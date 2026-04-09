const express=require('express')
const multer=require('multer')
const router=express.Router();

const Student=require('../models/studentModel')

// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads/')
//     },
//     filename:(req,file,cb)=>{
//         const suffix=Date.now();
//         cb(null,suffix+'-'+ file.originalname)
//     }
// })
const storage =multer.memoryStorage();
const upload=multer({storage:storage})

router.post('/create',upload.single('photo'),async(req,res)=>{
    try{
      const {name,age,email,phone,address}=req.body;
      const photopath=req.file ? req.file.path : null;


      const newStudent=  new Student({
        name,age,email,phone,address,photo:photopath
      })
      await newStudent.save();
      res.status(200).json({
        message:"student created successfully",
        student:newStudent
      })
    }
    
    
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})


module.exports=router;