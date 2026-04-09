const mongoose=require('mongoose');


const Schema=mongoose.Schema;

const studentSchema= new Schema({
    name:{type:String,required:false},
    age:{type:Number,required:false},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,required:false},
    address:{type:String,required:false},
    photo:{type:String,required:false}
})


module.exports=mongoose.model("student",studentSchema)