const cloudinary=require('../config/cloudinary.js')

const uploadImage=async (folder,filepath)=>{
    try {
        return await cloudinary.uploader.upload(filepath,{folder})
    } catch (error) {
        console.log(error);

    }
}

module.exports=uploadImage