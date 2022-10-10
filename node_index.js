// const http = require('http'); //to handle request and response in server.

// function dataControl(req,resp){
//     resp.write("<h1>Hello, this is Mayank.</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500); //createServer is taken as function as a parameter.





// const http = require('http'); //to handle request and response in server.

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is Mayank.</h1>");
//     resp.end();
// }).listen(4500); //createServer is taken as function as a parameter.







// function test(a){

//     return a*10;  //*************************************** */
// }
// the above function is equal to:
// const test =(a)=>a*100




// var colors = require('colors');
// console.log("package.json".green);



// console.warn("Mayank CSE1"); //Nodemon helps to run the code continuously.



//API
// const http = require('http');
// const data= require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'content-type':'application'});
// resp.write(JSON.stringify(data));
// resp.end();
// }).listen(5000);

//Input from command line

// console.log(process.argv[3]);
// const fs = require('fs');

// const input = process.argv;
// if(input[2]=='add'){

//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid Input");
// }


//CURD
// const fs = require('fs');
// const path = require('path');
// const dirPath= path.join(__dirname, 'CURD')

// console.warn(dirPath);
// const filePath = `${dirPath}/apple.txt`

// // fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath, 'utf8' , (err,item)=>{
//     console.log(item);
// })
// //Update
// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated");
// })

// //Rename
// fs.rename(filePath,`${dirPath}/fruits.txt`, (err)=>{
//     if(!err) console.log("File name is updated");
//})
//Delete
// fs.unlinkSync(`${dirPath}/fruits.txt`)


//Asynchronus
// console.log("start exe...");

// setTimeout(() => {
//     console.log("logic exe...");
// }, 2000);

// console.log("complete exe...");


//Express js
// const express= require('express');
// const app = express();

// app.set('view engine','ejs');

// app.get("",(req,res)=>{
//     console.log("Data sent by browser-->", req.query.name);   
//     res.send('<h1>Welcome, this is Home page<h1><a href="/about">Go to about page</a>');
// });
// app.get("/profile",(req,res)=>{
//     const user={
//         name:'Mayank',
//         skills:['Javascript', 'Node.js', 'C++']
//     }
   
//     res.render('profile',{user});
// });

// app.get('/about',(req,res)=>{
//     res.send(`
//     <input type= "text" placeholder="User name" />
//     <button> Click here</button>
//     `);
//     });

// app.get('/info',(req,res)=>{
//         res.send([
//             {
//             name: 'Mayank',
//             email: 'mayankrohilla13002@gmail.com',
//             contact: "6367125385"
//         },
//         {
//             name: 'Abhishek',
//             email: 'abhishekkashyap7002@gmail.com',
//             contact: "9874563307"
//         }
//     ]);
//         });

// app.listen(4222);



//Middleware
const express= require('express');
const app= express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Please provide age")
    }
    else if(req.query.age<18)
    {
       
        resp.send("Access Denied!")
    }
    else{
        next();
    }
    
}
// app.use(reqFilter)

app.get('/',reqFilter,(req,resp)=>{
    resp.send('Welcome to Home page')
})
app.get('/users',reqFilter,(req,resp)=>{
    resp.send('Welcome to Users page')
})


app.listen(5000)