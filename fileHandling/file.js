const fs= require('fs');     //To use build module we use this syntax if we use ./ then it means we create a module name fs
                                //and want to use that module;

                                

//Syncronous Call
// fs.writeFileSync("filename","Text you want to write in file");       //To write in file
// fs.writeFileSync("./hello.txt","What is your name?\n How are you?");  


// fs.readFileSync("fileName",endcoding);    To read file;
// const data= fs.readFileSync("./hello.txt","utf-8");
// console.log(data);


// fs.appendFileSync("filName","Data you need to append");   //To appebnd the data;
// fs.appendFileSync("./hello.txt",`\nHey There ${Date.now()}`);

// fs.copyFileSync("fileName whose copy you need","fileName of copied file");   //To copy a file;
// fs.copyFileSync("./hello.txt","./copy.txt");

// fs.unlinkSync("fileName to delete that file")  //To delete a file;
// fs.unlinkSync("./copy.txt");

//Asyncronous Call
// fs.writeFile("fileName", "Text you want to write","callBack function");  To write in file;
// fs.writeFile("./hello.txt","How are you??",()=>{});

// fs.readFile("fileName","encoding","callBackFunction()");     /To read file
// fs.readFile("./hello.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })
