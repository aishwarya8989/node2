const fs=require("fs");
const path=require("path");
// const req=require("./Public/index")
const express=require("express");
const app=express();
const port =8080

const static=path.join(__dirname,"./public")
// console.log(static);
// const path=require();
// fs.readFile("./public/index.html","utf-8",(err,data)=>{
//     console.log(data)

// })
app.use(express.static(static));
app.listen(port,()=>{
    console.log("server is running")
})
console.log(static);

