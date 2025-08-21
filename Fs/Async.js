const fs = require("fs")
const path=require("path");



const fileName="async.txt"
const filePath=path.join(__dirname,fileName) 


fs.writeFile(filePath,"the all data is here see it ", "utf-8",(err)=>{
    if(err){
        console.error(err)

    }else{
        console.log("the file has been saved ")
    }
})

fs.readFile(filePath, "utf-8",(err,data)=>{
    if(err){
        console.error(err)

    }else{
        console.log(data)
    }
})


fs.appendFile(filePath,"\nall the data after updating is here","utf-8",(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(fs.appendFile)
    }
})

//Deleting the data

// fs.unlink(filePath,(err)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log("File has been deleted")
//     }
// })