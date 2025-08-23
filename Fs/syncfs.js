const fs = require("fs"); 
const path = require("path");
const fileName="sync.txt"
const filePath= path.join(__dirname,fileName);
const writeFile = fs.writeFileSync(filePath,"all the data here watch  it ,updated","utf-8")
console.log(writeFile)





const readFile= fs.readFileSync(filePath,"utf-8");
console.log(readFile);






const appendFile =fs.appendFileSync(filePath,
"\nthe new data is here ","utf-8");

console.log(appendFile)


// const unlinkFile =fs.unlinkSync(filePath,"utf-8")
// console.log(unlinkFile)
