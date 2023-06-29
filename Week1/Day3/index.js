// console.log(b); //undefined
// var b=10; 
// console.log(b); // 10



// function demo(){

//     var a=20;
   
  
//     for( var d=10;d<12;d++){
//         console.log(d);
//     }

  
// }
// var a=demo();  //20

// let obj={
//     name:"sourabh",
//     city:"noida",
//     cityString:`Hello ${this.city}`
// }

// let ab=3;
// console.log(obj.cityString);
// console.log(obj['3']);

// let obj={
//     a:10,
//     b:20,
//     displayA:function(){
//         console.log(this.a)
//     }
// }

// console.log(obj.a);
// obj.displayA();

// class Person{

//     constructor(name,city){
//         this.name=name;
//         this.city=city;
//     }
// }

// let person=new Person("vaibhav","noida");

// ;
// console.log(person.name);


// const person = {
//     name: "John",
//     age: 25
//   };
//   person.city = "New York";
//   console.log(person.city); // Output: New York
//   delete person.age;
//   console.log(person.age); // Output: undefined


// obj={ a:10,
//     b:23,
//     c:12, 
// }
// for(let key in obj){
//     console.log(`key ${key} and value ${obj[key]}`);
// }



// function registerStudent(){

//     let name = prompt("Enter your name");
//     let age= prompt("Enter your age");
//     let grade= prompt("Enter your grade");


//     let student={
//         name:"",
//         age:0,
//         grade:"",
//         displayStudentInfo:function (){
//             console.log(`name = ${this.name} age= ${this.age} grade=${this.grade}`);

//             return 20;
//         }

//     }

//     student.name=name;
//     student.age=age;
//     student.grade=grade;

//     console.log(student.displayStudentInfo());

// }
// registerStudent();


/////////////////////////////////////////////////////////////////////////////////////

// Functions


// 1. Function Declaration

function funcDeclaration(){


    let i=10;
}

// funcDeclaration();

// Function Expression

const funcExpression = function (){


    let i=10;
    console.log(i);
}

//console.log(funcExpression);

// funcExpression();


// Arrow function

// const funcArrow = () => console.log(10);

const funcArrow2 =() =>{
    
    
    return 100;

}


// const funcArrow2 =() =>100;





//console.log(funcExpression);

// funcArrow();

// console.log(funcArrow2());



////Task


//FuncExpression

// Passing values

// const addExpression= function(a,b){
    

//     return a+b;
// }

// let a=10;
// let b=20;
// console.log(addExpression(a,b));


// Arrow Function 

//FuncExpression

// const addArrow= (a1,b1) => {
  

//     return a+b;
// }

// let a1=10;
// let b1=20;
// console.log(addArrow(a1,b1));





// Function Expression:





////////////////////////////////////////////////////////


// Rest Operator


// function restDemo(...inputs){

//     for(let ele of inputs){
//         console.log(ele)
//     }
// }

// // 1,2,3,4
// // 1, 2 ,3 
// restDemo(1,2,3,4);
// restDemo(1,2,3);

// Spred Operator

// function spreadDemo(a,b){

//     console.log(a);
//     console.log(b);

// }

// let arr=[1,2,3,4];
// spreadDemo(...arr);
///////////


//////////////////////////////////////////////////

// Closure Example.
// var b=10;
// function p1(){


//     function p2(){
//         var c=20;
//          console.log(b);
//     }

//     p2();
// }

// p1();

/////////////////////////////////////////////////////////////////////

// Arrays:

// let arr=[1,2,"Hi", {a:"hi",b:"c"}];

// console.log(arr);
// console.log(arr.length);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// for( let ele of arr){
//     console.log(ele);
// }


// for( let ele in arr){
//     console.log(ele);
// }

// let arr=[1,2,3,4];
// let sum=0;
// arr.forEach( (ele,index)=>{

//     // sum+=element;

//     // console.log(`${element}  ${index} `);
// });
// console.log(sum);


// let b1=arr.push(10);
// console.log(arr);
// // console.log("op of push "+b1);


// arr.pop();
// console.log(arr);

// arr.unshift(10);
// console.log(arr);
// let b=arr.pop();
// console.log(arr);


// console.log(arr);
// console.log(arr.indexOf(500));

// console.log(arr.toString());


// let numarr=[1,11,111,2,3];
// numarr.sort((a,b)=>a-b);
// console.log(numarr);

// let monarr=["June","May","December"];
// monarr.sort();
// console.log(monarr);





// const evenArr= arr.filter((ele)=>{
//     return ele===2;
// });

// console.log(evenArr);

// const mul2Arr= arr.map((ele)=>{
//      return ele*2;
// });

// console.log(mul2Arr);
let arr=[1,2,3,4];

const sumArr=arr.reduce((acc,ele,index,arr)=>{

    console.log("acc =>"+acc);
    console.log("ele =>"+ ele);
    return acc+ele;
})

console.log("op of acc"+ sumArr);



let cart=[];

let laptop={
    itemname:"lenovo",
    price:4000
}


let charger={
    itemname:"lenovo charder",
    price:500
}

cart.push(laptop);
cart.push(charger);


const finalPrice=cart.reduce((acc=0,item,index,arr)=>{
    console.log(acc);

    return acc.price+item.price;
})

console.log("op of  finalPrice"+  finalPrice);

