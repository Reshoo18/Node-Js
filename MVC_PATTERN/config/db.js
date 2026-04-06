const mongoose = require('mongoose');

const connectDb=async()=>{
    try{
        const conn=await mongoose.connect( process.env.MONGODB_URI);
        console.log(`mongoDb Connected: {conn.connection.host}`);
    }catch(error){
      console.error(error.message);
      process.exit(1);
    }
}

module.exports=connectDb;