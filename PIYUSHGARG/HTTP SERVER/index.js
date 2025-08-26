const http =require('http');
const fs =require('fs');
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()} ${req.url}:New require received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case"/":res.end("homePage");
            break
            case"/about":res.end("hello i am reshoo")
            default:res.end("404")
        }
    })
})

myServer.listen(8000,()=>{console.log("server started")})