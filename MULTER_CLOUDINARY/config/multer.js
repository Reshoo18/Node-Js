const multer=require('multer')

//const storage=multer.memoryStorage();



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
     cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        const suffix=Date.now()
        cb(null,suffix +'-'+file.originalname)
    }
})
const upload =multer({storage:storage})



module.exports=upload;