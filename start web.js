//1
// var authenticated = false;
// authenticated ? console.log("SIGNOUT") : console.log("LOGIN");


//2 
// var temp=21;
//  if(temp<20){
//      console.log("COLD");
//  }  
//   else if(temp==20){
//      console.log("MODERATE");
// }
 // else{
//      console.log("HOT");
//  }


//3
// var user = "testprep";
// switch (user) {
//     case "admin":
//       console.log("Full access");
//     break;
//     case "subadmin":
//     console.log("Access to create/delete courses");
//   break;
//   case "testprep":
//   console.log("Access to create/delete tests");
// break;
// case "user":
// console.log("Access to consume content");
// break;
//     default:
//         console.log("Trial user");
//         break;
// }


//4
//Fallasy Values-
// undefined
// null
// ''
// NaN
//  var user = null;
//  if(user){
//      console.log("Condition is true");
//  }
//  var user = "null";
//  if(user){
//      console.log("Condition is true");
//  }
//  var user = "";
//  if(user){
//      console.log("Condition is true");
//  }
//  var user = "2";
//  if(2 == user){
//      console.log("Condition is true");
//  }


//5.1
// function sayhello(){
//     console.log("Hello there, Mayank");
// }
// sayhello();//calling the function, use parenthesis
// sayhello;//refrencing the function

//5.2

// function sayhello(name){
//     console.log("Hello there", name);
// }
// sayhello("Mayank");
// sayhello();

//5.3

// function sayhello(name) {
//     console.log("hello Mayank");
//     console.log(`Hello there, ${name}. How are you?`);
// }
// sayhello("Mayank");

//5.4 //storing value of function inside a variable.

// function namaste(){
//     return "Hello in India";
// }
// var greetings = namaste();
// console.log(greetings);
// console.log(namaste());


//6.1
// function getuserRole(name, role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access`
//             break;
//         case "subadmin":
//             return `${name} is subadmin with access to create and delete courses`
//             break;
//         case "testprep":
//             return `${name} is testprep with access to create and delete tests`
//             break;
          
//         case "user":
//             return `${name} is user to consume content`
//             break;
          
//         default:
//             return `${name}, is a trial user.`
//             break;
//     }
// }
// console.log(getuserRole("Mayank", "admin"));
// var getRole = getuserRole("Gunnu", "subadmin");
// console.log(getRole);

//6.2 function inside a variable

// var getuserRole = function(name, role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access`
//             break;
//         case "subadmin":
//             return `${name} is subadmin with access to create and delete courses`
//             break;
//         case "testprep":
//             return `${name} is testprep with access to create and delete tests`
//             break;
          
//         case "user":
//             return `${name} is user to consume content`
//             break;
          
//         default:
//             return `${name}, is a trial user.`
//             break;
//     }
// }
// console.log(getuserRole("Mayank", "admin"));
// var getRole = getuserRole("Gunnu", "subadmin");
// console.log(getRole);


//7.1 (JS Contexts)
// sayHello();
// function sayHello(){
//     console.log("Hello");
// }
//7.2
// if(2 === 2){
//     console.log("This is true");
// }
// var myName = "Mayank"
// if(myName === myName){
//     console.log("true");
// }
//7.3.1
// function tipper(a){
//     var bill = a;
//     console.log(bill + 5);
// }
// tipper(5);
//7.3.2
// function tipper(a){
//     var bill = parseInt(a);//change the string to int.
//     console.log(bill + 5);
// } 
// tipper("5");
//7.3.3
// var bigTipper = function(a){
//     var bill = parseInt(a);//change the string to int.
//     console.log(bill + 15);
// }
// bigTipper("200");
//7.4
// var name = "Mayank Rohilla";
// console.log(name);

// function sayName(){
//     var name = "Mr M";
//     console.log(name);
// }
// sayName();
// console.log(name);


//8 Arrays
// var countries = ["India", "USA", "Russia", "Japan"];
// var states = new Array("Rajasthan", "Haryana", "Assam", "Uttrakhand");
// console.log(states[1]);
// console.log(states.length);
// states[0] = "Punjab";
// console.log(states);

// var user = ["Mayank", "mayank13002@gmail.com", 3, 35, true];
// console.log(user);

// user.pop();
// user.pop(); 
// console.log(user);

// user.unshift("NEW VALUE");
// console.log(user);

// user.shift();
// console.log(user);

// console.log(user.indexOf("Mayank"));
// console.log(user);

// console.log(Array.from("Mayank"));


//9.1 Arrow function in Array
// function isEven(element){
//     // if(element%2 === 0){
//     //     return true;
//     // }
//     // return false;
//     return element%2 === 0;
// }
// console.log(isEven(4));
//9.2
// var isEven = (element) => {   **************************************************************
//    return element%2 === 0;
// }
//console.log(isEven(4));
//9.3
// var isEven = (element) => {
//     return element%2 === 0;
//  }
// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);
//9.4
// var isEven = (element) => {
//     return element%2 === 0;
//  }
// var result = [2, 4, 6, 8].every((e) => {
//     return e%2 === 0;
// });
// console.log(result);


//10
// var testArray = [2, 4, 6, 9, 3, 1, 5];
// console.log(testArray.fill("h", 2,));

// var testArray = [2, 4, 6, 9, 3, 1, 5];
// // console.log(testArray.fill("h", 2, 5));

// const  myNumber = [23, 24, 5, 6, 70, 89, 69];*******************************************************************
// const result =myNumber.filter((num) => num!= 6); 
// console.log(result);

// const  myNumber = [23, 24, 5, 6, 70, 89, 69];
// const result =myNumber.filter((num) => num <  60);
// console.log(result);


//11
// var users = ["Mayank", "Akash", "Alisha", "Harshvardhan", "Amit", "Aditya"];
// //console.log(users.slice(1, 4));
// users.splice(1, 3, "HI");
// console.log(users);
 

//12 Objects in JS
// var user = {
//     firstName :  "Mayank",
//     lastName : "Rohilla",
//     role : "Admin",
//     loginCount : 32,
//     facebookSignedIn: true
// };

// console.log(user.firstName);
// console.log(user["lastName"]);
// console.log(user.loginCount);
// user.loginCount = 44;
// console.log(user.loginCount);
// console.log(user);
// console.table(user)


//13
// var user = {
//     firstName :  "Mayank",
//     lastName : "Rohilla",
//     role : "Admin",
//     loginCount : 32,
//     facebookSignedIn: true,
//     courseList: [],
//     buyCourse: function(courseName){
//         this.courseList.push(courseName)

//     },
//     getCourseCount: function(){
//         return `${this.firstName} ${this.lastName} is enrolled in total of ${this.courseList.length} courses`;
//     },

//     info: function(){
//         return `${this.firstName} ${this.lastName} is working as an ${this.role} with ${this.loginCount} login Count
//         and is enrolled in ${this.courseList.length} Courses. Courses are ${this.courseList}.`
//     }
// };

// var courseList = true;
// console.log(user.firstName);
// console.log(user.getCourseCount());
// user.buyCourse("node JS Course");
// user.buyCourse("Angular Course");
// console.log(user.getCourseCount());
// console.log(user.info());


//14
// for(let i = 0; i<10; i++){
//     console.log(i);
// }

// const myStates = [
//     "Rajasthan",
//     "Assam",
//     1947,
//     1234,
//     "Gujarat",
//     "Maharashtra",
// ];
// // console.log(typeof myStates[2]);
// for(let i=0; i < myStates.length; i++) {
   
//   if(typeof myStates[i] == "string")continue;
//   console.log(myStates[i]);
  
// }


//15 while loop
// let i=0;
// while(i< myStates.length){
//     console.log(myStates[i]);
//     i++
// }
// let i=0;
// do
// {
//     console.log(myStates[i]);
//     i++
// } while(i< myStates.length)


//16
// const myStates = [
//     "Rajasthan",
//     "Assam",
//     1947,
//     1234,
//     "Gujarat",
//     "Maharashtra",
// ];

// var i=0;

// for(;;){
//     if(i>3)break;
//     console.log(i);
//     i++
// }
// myStates.forEach( (s) => console.log(s)); //***************************

// //17
// const names= ["youtube", "facebook", "instagram", "netflix", "amazon"]

// for(const n of names){
//     console.log(n);
// }

// const symbols = {   //*******************************************************************************************
//     yt: "Youtube",
//     ig: "instagram",
//     fb: "facebook",
//     nx: "netflix"
// }
// for(const n in symbols)//"of" is for array and "in" for objects.
// {
//     /*console.log(symbols[n]);*/
//     console.log(`key is ${n} and value is: ${symbols[n]}`);

//}


//18 THIS- for regular function calls, "this" points to window object.
// console.log(this);

// var user = {
//     firstName: "Mayank",
//     courseCount: 4,
//     getCourseCount: function (){
//         console.log("LINE 7", this);
//     },
// };

// user.getCourseCount();




// var palindrome(cls, input1, input2);
// for i in Range(0, int(len(input2)/2)));
// input2[i] = input2[len(str)-i-1];