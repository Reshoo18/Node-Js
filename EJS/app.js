const express=require('express')

const app=express()

const PORT=3000;


app.get('/',(req,res)=>{
    res.send("hey i am home")

})

app.listen(PORT,()=>{
    console.log(`Server at running this port :${PORT}`)
})