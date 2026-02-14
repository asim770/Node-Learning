const http= require('http');
const fs = require('fs');
const myServer=http.createServer((req,res)=>{
    console.log("New req. recived");
    fs.appendFile(".log.txt",`Req recived from Server at ${Date.now()} and the URL is ${req.url}\n`,(err,data)=>{
        switch(req.url){
            case '/': res.end("Welcome to Home Page");
            break
            case '/about': res.end("Welcome to about page");
            break;
            case '/contact': res.end("Wecome to contact page");
        }
    });
   
});
const port=4000;
myServer.listen(port,()=> console.log(`Server is started at ${port}`));

