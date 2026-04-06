const express=require('express')
const dotenv=require('dotenv')
const productRoutes=require('./routes/productRoutes.js')
dotenv.config();
const app=express();
const connectDb=require('./config/db.js')
const PORT=process.env.PORT;
connectDb();
app.get('/',(req,res)=>{
    res.send("this is the home page")
})
app.use('/api',productRoutes)

app.listen(PORT,()=>{
    console.log(`Server at listeing this port ${PORT}`)
})