### Object 

- Obj Declaration


```js

let obj={
    a:10,
    b:20,
    displayA:function(){
        console.log(this.a)
    }
}

console.log(obj.a);
console.log(obj.displayA());


class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    displayInfo(){
        console.log(`${this.name}`);
    }

}

let s1=new student("sam",10);
s1.displayInfo();
console.log(s1.name);


```


### Functions

```js

// function greet(name){
//     console.log(name);
// }

// let greet=function (name){
// console.log(name);
// }


let greet=(name)=>{
    console.log(name);
}

greet("Ram");

```
- task








### Array Methods:

```js

fruits.push("pear");
console.log(fruits); // Output: ["apple", "grape", "orange", "pear"]

let removedFruit = fruits.pop();
console.log(removedFruit); // Output: "pear"
console.log(fruits); // Output: ["apple", "grape", "orange"]

let joinedString = fruits.join(", ");
console.log(joinedString); // Output: "apple, grape, orange"

let slicedArray = fruits.slice(1, 3);
console.log(slicedArray); // Output: ["grape", "orange"]

fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// "apple"
// "grape"
// "orange"


let num=[1,2,3];

num.forEach(function (element, index, array){
    console.log(`${element} <==> ${index} <==> ${array}`)
})

for(let data in num){
    console.log(data);
}


for(let data of num){
    console.log(data);
}


console.log(num.toString());
console.log(num.indexOf(2));



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num,element,arr) =>{
    return num % 2 === 0
});
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

let products=[{name:"Mobile", price:20},{nane:"Tab", price:30}];

const filteredObj= numbers.filter(ele => {
    return ele.price>25;
})

console.log(filteredObj);





```


### Call back

```js


function a(){
    console.log("a");
}

function b(a){
    console.log("b")
    a();
}

b(a);

```


### Dom innerHTML:

fetch values from form when we press submit.

Change the background-color of input filed if it is blank.

### EventListener.
When I hover over different blogs their color should Chagnes.

redirect to another page when we click a submit button.

