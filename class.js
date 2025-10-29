// let str="*";
// for(let i=0;i<=5;i++){
//     console.log(str.repeat(i));
// }

// let str="*";stri="";
// for(let i=0;i<=5;i++){
//     for(let j=0;j<i;j++){
//         stri+= str;
    
// }
// console.log(stri);
// }
// const hello= val=>{console.log("Good morning");
//     console.log("hello"+val)};
//     hello("I am Sudharsan");

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

// let out = "";
// for (let i = 0; i <=5; i++){
//     for(let j = 0; j < i; j++){
//         out +=" ";
//     }
//     for(let k = i; k<=5; k++){
//         out +="* ";
//     }
//     out +="\n";
// }
// console.log(out);

// Reverse Number
//  let x = prompt("enter the no to reverse");
//  let num;revnum = 0;
//  while(x){
//     num = x % 10;
//     revnum = revnum * 10 + num;
//     x = Math.floor(x/10);
//  }
//  console.log(revnum);

// const a = prompt("enter the value");
// if(a>=0){
//     let result= factorial(a);
//     console.log(result);
// }

// function factorial(a){

//     if(a == 0){
//         return 1;
//     }
//     else{
//         return a * factorial(a-1);
//     }
// }

// 
// const cars = ["Bmw", "Lambo", "Ferrari", "Supra"];
// [vname1,...rest]= cars
// console.log(rest);

// let digi =n =>{n.toString();
//     return Array.from(String(n))
// };
// console.log(digi(123));

// const digities = n =>
// [...`${n}`].map(i => parseInt(i));
// return Array.from( String(n));
// console.log(digities(123));
// console.log(digities(1234))

// const person = [
//     { name: "Naga", age: 10 },
//     { name: "Vishnu", age: 12 },
//     { name: "Sudhar", age: 17 }
// ];

// sortname();
// sortage();
// displayarray();

// function displayarray() {
//     for (let i = 0; i < person.length; i++) {
//         console.log("Name: " + person[i].name + " Age: " + person[i].age);
//     }
// }

// function sortname() {
//     person.sort(function (a, b) {
//         let x = a.name.toLowerCase();
//         let y = b.name.toLowerCase();
//         if (x < y) return -1;  
//         if (x > y) return 1;
//         return 0;              
//     });
// }
// function sortage(){
//     person.sort(function(a,b){return a.age - b.age});
// }




//Today's task


// let arrObj=[
//     { name: "Sudhar", rollNo: 2039, marks: 100},
//     { name: "Arjun", rollNo: 2040, marks: 99},
//     { name: "Maha", rollNo: 2041, marks: 98},
//     { name: "Harini", rollNo: 2042, marks: 70},
//     { name: "Sathish", rollNo: 2043, marks: 42},
//     { name: "Janani", rollNo: 2044, marks: 35 },
//     { name: "Vishnu", rollNo: 2045, marks: 28},
// ];

// console.log(arrObj.length);

// function greatThan40(arrObj){
//    return arrObj.filter( (obj) => obj.marks > 40);
// }

// r.forEach( (data) => {
//     console.log(data.marks)
// });



// console.log(calAver(arrObj));
// function calAver(arrObj){

//    let sum = arrObj.reduce((prev,curr) => prev +curr,0);
//    return sum / arrObj.length;

// }


// let s=calAver(arrObj);
// console.log(s);

// function calAver(arrObj) {
//    const sum = arrObj.reduce((prev, curr) => prev + curr.marks, 0);
//    return Math.floor(sum / arrObj.length);
// }

// let so=sortMark(arrObj);
// // console.log(so);
// // console.log(sortMark(arrObj));

// function sortMark(arrObj){
//    return arrObj.sort( (b,a) => b.marks-a.marks);
// }   

// console.log(so);

// Object Constructor in JS

// function student(name,age,gender,course,city){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.course = course;
//     this.nationality = "Indian"; // Property Defalut Valuse 
// }
// const student1 = new student("Sudhar", 20, "Male", "Java Fullstack");
// const student2 = new student("Arjun", 20, "Male", "Python Fullstack");
// const student3 = new student("Vishnu", 20, "Male", "Java Fullstack");
// const student4 = new student("Maha", 22, "Female", "Java Fullstack");
// const student5 = new student("Harini", 22, "Female", "Java Fullstack");

// console.log(student1.name +" "+ student2.name +" "+ student3.name +" "+ student4.name +" "+ student5.name+"\n"+ student4.nationality);

// Get Set Properties
// const person = {name : "Sudhar", age : 21, city : "Pmk",
//     get Name(){
//         return this.name;
//     },

//     set Name(value){
//     this.name = value;
// }
// };
// console.log(person.Name);
// person.Name = "Sabari";
// console.log(person.name);

// Properties Get Set

// const obj = {counter: 0};
// Object.defineProperty(obj, "reset",{ get:function (){
//      this.counter = 0;
// }})
// Object.defineProperty(obj, "increment", { get:function(){
//     this.counter++;
// }
    
// })
// Object.defineProperty(obj, "decrement", {get:function(){
//      this.counter--;
// }})
// Object.defineProperty(obj, "add",{set : function(value){
//     this.counter+=value;
// }})
// Object.defineProperty(obj, "sub", {set : function(value){
//     this.counter-=value;
// }})

// obj.increment;
// obj.increment;
// obj.add = 5;
// obj.sub = 2;
// obj.decrement;
// obj.reset;
// console.log(obj.counter);


// Class Method 

// class Car{
//   constructor(name, year){
//     this.name = name;
//     this.year = year;
//   }
//   age(){
//     const date = new Date();
//     return date.getFullYear() - this.year; 
//   }
// }
// const my_car = new Car("BMW",2005);
// console.log(my_car);
// console.log("Age of the my car :"+" "+my_car.age());


// Getter and setter in class


// class Car{
//   constructor(name, year){
//     this.name = name;
//     this.year = year;
//   }
//   age(){
//     const date = new Date();
//     return date.getFullYear() - this.year; 
//   }
//   get carname(){
//     return this.name;
//   }
//   set carname(value){
//     this.name = value;
//   }
// }
// const my_car = new Car("BMW",2005);
// console.log(my_car);
// console.log("Age of the my car :"+" "+my_car.age());
// my_car.name = "Lambogini";
// console.log(my_car.name);

// function print(){
//   console.log("hello");
// }
// function display(cb){
//   cb();
// }
// display(print);

// Inheritence in JS

// class cars{
//   constructor(brand){
//     this.carsname = brand;
//   }
//   present(){
//     console.log ("This is a"+" "+ this.carsname);
//   }
// }
// class model extends cars{
//   constructor (brand,model){
//     super(brand);
//     this.modelname = model;
//   }
//   show(){
//     this.present();
//     console.log(this.modelname);
//   }

// }
// const carobj =new model ("BMW", "M5");
// carobj.show();

// Asynchronus 

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout Executed");
// }, 0);

// console.log("End");

// console.log("Start");

// setTimeout(fan, 1000)
// function fan(){
  
//   console.log("Function a");
// }

// console.log("End");

// Set Interval
// console.log("Start");

// my = setInterval(() => {
//   console.log("Timeout Executed");
// }, 1000);
// setTimeout(clear, 3000);
// function clear(){
//   clearInterval(my);
// }
// console.log("End");


//  Sets and Maps

// let mycollect = new Set(["S","V","N","M"]);
// console.log(mycollect.size);
// mycollect.add("H","J");
// let mylist = mycollect.keys()
// for (let x of mylist){
//     console.log(x);
// }
// console.log(mycollect.has("S"));


// let mycollection = new Map([["Lap",20],["I Phone", 30],["One Plus", 30]]);
// console.log(mycollection.size);
// console.log(mycollection.get("Lap"));
// mycollection.set("Samsung", 40);
// console.log(mycollection.has("I Phone"));
// mycollection.delete("Lap");
// mycollection.set("One Plus",70);
// mylist = mycollection.entries();
// for(let x of mylist){
//     console.log(x);
// }


