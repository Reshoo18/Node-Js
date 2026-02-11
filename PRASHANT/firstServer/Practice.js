const http=require('http');

const server= http.createServer((req,res)=>{
    console.log(req.url,req.method);

    if(req.url==="/home"){
        res.write('<h1>This is home page</h1>');
        return res.end();
    }else if(req.url==="/About"){
         res.write('<h1>This is About page</h1>');
         return res.end();
    }else if(req.url==="/Contact"){
         res.write('<h1>This is Contact page</h1>');
          return res.end();
    }else if(req.url==="/Cart"){
        res.write('<h1>This is Cart page</h1>');
        return res.end();
    }

    res.write(`
        <html lang="en">
<head>
     
    <title>Myntra</title>
</head>
<body>
    <head>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/About">About</a>t</li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Cart">Cart</a></li>
        </ul>
    </nav>
    </head>
</body>
</html>
        `);
        res.end();
        
});
const PORT=3000;
server.listen(PORT,()=>{console.log(`Server started at PORT: ${PORT}`)});