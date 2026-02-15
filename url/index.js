const http= require('http');
const fs = require('fs');
const url= require("url");
const myServer=http.createServer((req,res)=>{
    // console.log("New req. recived");
    if(req.url==="/favicon.ico") return res.end();
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile(".log.txt",`Req recived from Server at ${Date.now()} and the URL is ${req.url}\n`,(err,data)=>{
        switch(myUrl.pathname){
            case '/': res.end("Welcome to Home Page");
            break
            case '/home': res.end("Wel to Home Page");
            break;
            case '/about':
                const name= myUrl.query.mname;
                res.end(`Hey ${name}, Welcome to the server`);
            break;
            case '/contact': res.end("Wecome to contact page");
            break;
            default: res.end("Error 404 Not Found");
        }
    });
   
});
const port=4000;
myServer.listen(port,()=> console.log(`Server is started at ${port}`));

