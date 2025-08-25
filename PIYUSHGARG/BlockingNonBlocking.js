const fs =require("fs")



//blocking
const result=fs.readFileSync("./file.txt","utf-8");
console.log(result)


//non blocking its async 
// fs.writeFile("./File.txt","hello world async",(err)=>{
   
// });