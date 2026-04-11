const express=require('express');
const dotenv=require('dotenv')
dotenv.config();
const upload=require('../config/multer.js');
const uploadImage = require('../utils/fileUpload.js');

const router=express.Router();


router.post("/upload",upload.single("file"),async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({
                message:"file does't available"
            })
        }
         const uploadFile= await uploadImage(req.file.path,'upload')
         console.log(uploadFile)
        res.status(200).json({
            message:"file uploaded",
            file:req.file
        })
    }

   
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message: "internal server problem"
        })
    }
})


module.exports=router