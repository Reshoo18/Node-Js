const http=require('http');



const server=http.createServer((req,res)=>{
    
    if(req.url==='/'){
        res.write('<h1>this is home page</h1>')
       return res.end();
    }else if(req.url==='/products'){
        res.write('<h1>this is producs page</h1>')
        res.end();
    }else{
        console.log(req.url,req.headers,req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>the node js things</head>');
    res.write('<body><li> learning the node js</li></body>')
    res.write('</head')
    res.end();
    }
   
})

const PORT=3000;
server.listen(PORT,()=>{console.log(`Server Running at port :${PORT}`)})