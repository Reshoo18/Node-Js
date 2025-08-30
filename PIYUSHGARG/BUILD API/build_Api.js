const express=require('express')
const app = express();
const users=require('./MOCK_Data.json')
const PORT=9000;
app.get('/users',(req,res)=>{
     return res.json(users);
})

app.listen(PORT,()=>{
    console.log(`Server started ${PORT}` );
});