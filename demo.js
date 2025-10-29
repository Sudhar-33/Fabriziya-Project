/* // variable Declaration
let bookname, sum, diff;
// Variable Initialization
bookname = "Hardik Pandya";

let bookauthor = "Indian Cricketer",
    followers = "34 Million",
    role = "All Rounder"
console.log(bookname,"\n", bookauthor,"\n",role, "\n",followers); */


// Number datatype:
// let sum = 543 + 245;
// console.log(typeof sum);

// Special numeric value
// let infi = Infinity;
// let neginfi = -Infinity;
// let temp = NaN;
// temp = NaN+2;
// console.log( temp);

// BigInt datatype:
// let big = 12345678910n;
// console.log(big+2024n);

// String datatype:
// let intro = "Hi I'm Sudharsan 1+23";
// let quote = 'He said "I am Bat Man"';
// let paragraph = `This is Bat Man's home. Bruce Wayne said "I'm Bat Man"`;
// let embed = `1+2 = ${1+2}`;
// console.log(embed);

// Boolen datatype
// let ismale = true;
// console.log(typeof ismale);

// Null datatype
// let age = null;
// console.log(typeof age);

// undefined Datatype
// let DOB;
// console.log(DOB);

//Dynamic language
// let myName = "Sudhar";
// myName = "Hardik";
// console.log(typeof myName);
// myName = 896;
// console.log(typeof myName);

// let a = 12;
// let b = 13;

// let c = ++a + b--;
// console.log(c);

// Comparison
// let a = '12';
// let b = '20';
// let result = a < b;
// console.log(result);

// Patterns
// let out = '';
// for (let i=5; i>=0; i--){
//     for (let j=0; j<i; j++){
//         out +="  "; 
//     }
//     for (let k=i; k<5; k++){
//         out+="* "
//     }
//     out += "\n";
// }
// console.log(out);

// Boolen Comparison
// let a = '0';
// let b = 0;
// a = Boolean(a);
// b = Boolean(b);
// console.log(a,b);
// console.log('2' == 0);
// console.log('0' === 0);

// null and undefined
// console.log(null == undefined);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null <= 0);
// console.log(null == 0);

//  undefined 
// console.log(undefined > 0);
// console.log(undefined <= 0);
// console.log(undefined == 0);
// console.log(Number(undefined));
// console.log('goms' > 'Zoms');

// Conditional Statements
// let person;
//  let age = 13; 
// if(age > 18){
//     person = 'adult';
// }
// else if(age > 12){
//     person = 'teenager';
// }
// else{
//     person = 'child';
// }
// console.log(person);

// Conditional Operator
// let person;
// let age = 15;
// person = (age > 18)? 'Adult' : (age > 12)? 'Teenage' : 'Child'; //First bracket is if part, Second one is else if part , and Third one is else part.
// console.log(person);

// if('0'){
//     console.log('Hi'); // This convert boolen type beacuse its string to boolen is value empty space true 
// }

//Positive Or Negative Number
// let x = 10;

// if(x > 0){
//     console.log('Positive');
// }
// else if(x < 0){
//     console.log('Negative');
// }
// else{
//     console.log('Zero');
// }

//Leap Year
// divisible by 4 
// divisible by 100? divisible by 400.

// let year = 1900;

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log('Leap Year');
//         }
//         else{
//     console.log('Not a leap year');
//         }
//     }
//     else{
//         console.log('Leap Year');
//     }
// }
// else{
//     console.log('Not a leap year');
// }

// Odd Or Even Number 

// let x = 90;

// if(x % 2 == 0){
//     console.log('Even Number');
// }
// else{
//     console.log('Odd Number');
// }

// Logical Operator
// -OR, -And, -NOT, -NULL Coalescing 

// Truth Table for OR 
//   A     B     O
// -------------------
//   1     1     1
//   1     0     1
//   0     1     1
//   0     0     0

// Truth Table for AND 
//   A     B     O
// -------------------
//   1     1     1
//   1     0     0
//   0     1     0
//   0     0     0

// NOT
// A  B            //Displays the values return in opposite way.
// 1 NOT 0
// 0 NOT 1

// console.log(1 || 1);  //OR operator || this the OR operator use in code.
// console.log(1 && 1);  //And operator && use in this And operator in code.
// console.log(!1);      // NOT operator ! use in the symbol of ! in code.
// console.log(1 && 22);

// let age = 21;
// let Gender = "Female";

// if(age>=18 && Gender == "Female"){
//     console.log("Eligible for Marriage");
// }
// else{
//     console.log("Not Eligible for Marrige");
// }

// let Age = 18;
// let Gender = "F"

// if(Age>=21  || (Age >=18 && Gender =="F")){
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }

// Null Coalescing
// let age;
// let current_age = age ?? 19;
// console.log(current_age);

// console.log(null || 0 || undefined);

// Loops
// while, do-while, for

// printing from 1-17
// while loop

// let num = 1;

// while(num <= 17){
//     console.log(num);
//     num+=1;
// }

// do-while
// let num = 11;
// do{
//     console.log(num);
// }while(num <= 10);
// console.log("Outside loop");

// for loop

// for(let num =1;num<=10;num++){
//     console.log(num);
// }

// Factorial Program 
// for loop use 
// let n = 5;

// let ans = 1;
// for (let i=1; i<=n; i++){
//     ans*= i;
// }
// console.log(ans);

// while loop use 
// let n = 4;

// let ans = 1;
// let i =1;
// while(i<=n){
//     ans *= i;
//     i++;
// }
// console.log(ans);

// Sum of N number

// let n = 4;
// let ans = 0;
// let i =1;
// while(i <= n){
//     ans += i;
//     i++;
// }
// console.log(ans);

// for loop use in Sum of N numbers

// let n = 5;

// let ans = 0;
// for(let i=1; i<=n; i++){
//     ans += i; 
// }
// console.log(ans);

// Breake Statement

// let n = 5;
// let ans = 0;
// for (let i=1; i<=n; i++){
//     if( i==3){
//         break;
//     }
//     ans +=i;
// }
// console.log(ans);

// Continue Statement
// let n = 4;
// let ans = 0;
// for(i=1; i<=n; i++){
//     if(i==2){
//         continue;
//     }
//     ans +=i;
// }
// console.log(ans);

// Example addition the odd numbers
// let n = 10;
// let ans = 0;

// for (let i=1; i<=n; i++){
//     if (i % 2 == 0){
//         continue;
//     }
//     ans += i;
// }
// console.log(ans);

// Switch

// let n = 3;

// switch(n){
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('Two');
//         break;
//     case 3:
//         console.log('Three');
//         break;
//     default:
//         console.log('Number greater than 3');
// }

// Calculate Program

// let op = '+';
// let a = 44, b = 56;

// switch(op){
//     case '+':
//         console.log(a+b);
//         break;
//     case '-':
//         console.log(a-b);
//         break;g
//     default:
//         console.log('Invaild Opertion ');
// }

// let s = "56789";
// let a =0;
// for (i=0; i<s.length; i++){
//     a+=Number(s[i]);
    
// }
// console.log(a);

// Function in Js

// let a = 12, b = 18;
// function Arjun(d,e){
//     console.log((d+e*e/d-e)*d);
// }
// Arjun(a,b);
// Arjun(2,4);

// Default Parameters In Functions

// let a = 10, b = 5;
// function Vishnu(j=5,s){  // But you gave the first parameter value and run call the function
//  console.log(j*s+s/j*j);    // in single parameter that program o/p is NaN.
// }
// Vishnu(10);

// Scope in Js

// let  a = 2, b = 3;
// // let c;  // Global Variable
// function San(f,g){       
//     let c = (f*g*f*g);  //Local Variable
//     return c;
// }
// // San(2,3);
//  console.log(San(a,b));

// Odd or Even In Function

// let a = 11;

// function oddEven(x){
//     if (x % 2 == 0){
//         console.log("Even")  // use return "Even";
//     }
//     else{
//         console.log("Odd"); // use return "Odd";
//     }
// }
// oddEven(a);
// // console.log(oddEven(a));

// Callback Function

// function operation(op, a, b){
//     return op(a,b);
// }

// let add = (a,b) => a+b;

// function sub(a,b){
//     return a-b;
// }

// console.log(operation(add, 2, 3));

// let mul = (x) => x*5;
// console.log(mul(6));

// Objects in Js
// let car = {
//     name : "Competion M5",
//     brand : "BMW",
//     drive : "Petrol",
//     price : 20
// };
// console.log(car.name + "\n" +car.brand);

// Constructor And New Keyword

// let  a = {
//     name : 'Sudhar'
// }

// function User(h){
//     this.name = h;
// }

// let Sudhar = new User('Sabari');
// let Sasi = new User('Sankar');

// console.log(Sudhar,Sasi); 


// Tirivia Question

// function Add(){
//     this.a =20;
//     this.b =19;
//     this.add = function(c){
//         return this.a+this.b+c;
//     }
// }

// let sum = new Add();
// console.log(sum.add(17));

// Array in Js

// let veges = new Array();
// veges = ['carrot','beetroot',{name:'Sudhar', age : 20},function add(a,b){return a+b}, true, null, undefined, 17];


// console.log(veges[3](17,33));

// let fruits = ['Apple','Orange','Pomogranate'];

// fruits.push('Guva');
// fruits.unshift('Kiwi');
// fruits.pop();
// fruits.shift();
// console.log(fruits);

// for(fruit in fruits ){
//     console.log(fruits[fruit]);
// }

// for(fru of fruits){
//     console.log(fru);
// }

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// let mat = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for(let i =0;i<mat.length;i++){
//     for(let j =0; j<mat[i].length; j++){
//         console.log(mat[i][j]);
//     }
// }

// Map In Js

// let map = new Map();
// map.set(1,"Hardik")
// .set(2,"Pandya")
// .set(3,"Name Of Comeback");
// // map.delete(2);
// // map.clear();
// // console.log(map); //get,has,

// for(key of map){ //use keys, values.
//     console.log(key)
// }

// Sets In Js

// let set = new Set();
// set.add('Dhoni 7')
// .add('Virat 18')
// .add('Dhoni 7');  //Duplicate can't add


// set.delete('Virat 18');

// console.log(set);

// for(s of set){
//     console.log(s);
// }

// let set = new Set();

// set.add(6)
// .add(3)
// .add(7)
// .add(4)
// .add(8)
// .add(9)
// .add(2)
// .add(6)
// .add(6)
// .add(8);

// console.log(set.size);

//JSON - Java Script Object Notation

// let user = {
//     name : 'Rahul',
//     age  : 29,
//     Role : 'Batsman',
// };

// console.log(JSON.stringify(user));

// let user = '{"name" : "Rohit 45", "age" :34 }';

// console.log(JSON.parse(user));

// Date And Time In Js

// let bday = new Date('2005-01-17');

// console.log(bday.getDay());



// Recursive Function In Js
// 5 => 5x4x3x2x1 = 120
// function factorial(n){
//     if (n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

// Tirivia Qus

// function sum(n){
//     if (n==0){
//         return 0;
//     }
//     return n+sum(n-1);
// }
// console.log(sum(5));

// Classes In JS
// Object
// let san = {
//     name : "Jadeja",
//     age : 34,            // Example In Object

//     Role : function(){

//     }
// };

// class San{
//     // name = "Sachin";
//     // age = 54;
//      #name;  //Private Property
//     constructor(name,age){
//         this.#name = name;
//         this.age = age;
//     }
//   Display(){
//     console.log("Name :", this.#name);
//     console.log("Age :", this.age);
//   }

//   get name(){       //Getter Method 
//     return "Name :" + this.#name;
//   }

//   set name(n){

//     if(n == "Sai Sudharsan"){
//         this.#name = "Mr Consistency";
//     }
//     else{
//     this.#name =n ;
//     }
//   }
// }

// let Sas = new San("Sai",25);
// Sas.name = "Sai Sudharsan"
// console.log(Sas.name)

// Date And Time 

// var today = new Date();

// var day = today.getDay();

// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log("Today is" + " "+ daylist[day]+".");

// var hour = today.getHours();
// var minute = today.getMinutes();
// var Second = today.getDate();

// var prepand = (hour >= 12 ) ? "PM" : "AM" ;

// hour = (hour >= 12) ? hour - 12 : hour;

// if(hour === 0 && prepand === "PM"){
//     if (minute === 0 && Second === 0){
//         hour =  12;
//         prepand = 'Noon' ;
    
//     }
//     else{
//         hour = 12;
//         prepand = 'PM';

//     }
// }

// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && Second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     } else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }

// console.log("Current Time: " + hour + prepand + " : " + minute + " : " + Second); 



// let a = undefined;

// try{
//     console.log(a.name);
// }
// catch(error){
//     // console.log("Erroe has occured");
//     throw new TypeError("New Error");
// }


// Promise, Async, Await 
//  isHalwaThere = true;
// function waitInQueue(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//           if(isHalwaThere){
//             resolve("Buy 1/2 kg Halwa");
//           }
//           else{
//             reject('Halwas Finish');
//           }   
//         }, 2000);
//     });
// }

// function buyHalwa(){
//     waitInQueue().then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//    .finally(()=>{
//       console.log('Go Home');
//    })
    
// }

// buyHalwa();

// console.log("Halwa Wala");

