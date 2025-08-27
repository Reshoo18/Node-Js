const http =require('http');
const fs =require('fs');
const url=require('url');
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()} ${req.url}:New require received\n`;
    const myUrl= url.parse(req.url,true);
    console.log(myUrl)
    fs.appendFile('log.txt',log,(err,data)=>{
        if(req.url==="/favicon.ico") return res.end();
        switch(myUrl.pathname){
            case"/":res.end("homePage");
            break
            case"/about":
            const username =myUrl.query.myname; 
            res.end(`hi,${username}`)
            break
            default:
                res.end("404 not found")
        }
    })
})

myServer.listen(8000,()=>{console.log("server started")})