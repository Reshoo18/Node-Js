// External Module
const express = require('express');

const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
   next();
})

app.use(express.urlencoded());

app.get("/",(req,res,next)=>{
    
    res.send(`<h1>Welcome to air bnb</h1>
        <a href="add-home">Add Home</a>`
    );
})
app.get("/add-home",(req,res,next)=>{
    
    res.send(`<h1>create your account here</h1>
        <form action="/add-home" method="POST">
            <input type="text" name="housename" placeholder='enter your housename'/>
            <input type="submit"/>
        </form>`
    );
    })
app.post("/add-home",(req,res,next)=>{
    console.log(req.body)
       res.send(`<h1>Home registered successfully</h1>
       <a href="/">Go to Home</a>`
       );
})







const PORT=3000;
app.listen(PORT,()=>{console.log(`Server Running at port :${PORT}`)})



