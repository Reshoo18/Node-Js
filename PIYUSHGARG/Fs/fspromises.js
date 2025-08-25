const fs=require("fs");
const path = require("path")
const fileName="Fspromises.txt"


const filePath=path.join(__dirname,fileName);

fs.promises.writeFile(filePath,"this is the initial data in this file fsPromises is here","utf-8").then(console.log("all the data is here see it")).catch((err)=>{console.log(err)});


fs.promises.readFile(filePath,"utf-8").then(console.log(fs.readFile)).catch((err)=>{
    console.log(err)
})

fs.promises.appendFile(filePath,"\nhere you can see the updated data","utf-8")
.then(console.log("yes see the updated data in the file"))
.catch((err)=>{console.log(err)})


//fs.promises.unlink(filePath,"utf-8").then(console.log(fs.unlink)).catch((err)=>{
 //   console.log(err)
//})