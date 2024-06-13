const express = require("express");
const app = express();
const port = 3000 || 5000;
const verify = require("./middleware/verification");

app.use((req,res,next)=>{
    console.log("http method ->"+req.method + ",url->"+req.url);
    next();
})
app.get('/',verify,(req,res)=>{
    res.send("Heyy");
})
app.post('/',verify,(req,res)=>{
    res.send("post req");
})
app.listen(port,()=>{
    console.log(`server is started on port ${port}`);
})