const express=require('express')
const app = express();
const users=require('./MOCK_Data.json')
const PORT=9000;

app.get("/users",(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
})
app.get('/api/users',(req,res)=>{
     return res.json(users);
})

app.route("/api/users/:id").get((req,res)=>{
    const id=req.params.id;
    const user = users.find((user)=> user.id === id)
     return res.json(user);
})
.put((req,res)=>{
    // edit user with id
   res.json({status:'pending'})
})
.delete((req,res)=>{
res.json({status:'pending'})
})

app.listen(PORT,()=>{
    console.log(`Server started ` );
});