const express=require('express')
const path=require('path')
const app=express()
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

const PORT=3000;


app.get('/',(req,res)=>{
    res.render("index")

})

app.listen(PORT,()=>{
    console.log(`Server at running this port :${PORT}`)
})