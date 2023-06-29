### varibles and data types

```js

var a=10;
b=a;
b--;
console.log(a);

var arr1=[10,20]
var arr2=arr1;
arr2[0]=5;
console.log(arr1);


var name;
var number;

console.log(name);
console.log(number);

name="3";
numbr="sham";

console.log(name);
console.log(number);

let obj={
            a:"hi"
        }
        console.log(obj);
        obj=null;
        console.log(obj);

function demo(){
    let a=10;
}

console.log(typeof(demo))

let arr=[];
console.log(typeof(arr));
console.log(Array.isArray(s1))



var isStudent=true;
console.log(typeof(isStudent));



```
-  diff bet null vs undefined


### type coercion:

```js

console.log(10+"40");
console.log(6-"5");
console.log("Ramesh" + "Rao");
console.log(" "+0);
console.log("Ramesh" - "Rao");
console.log(true+true);
console.log(true+ false);
console.log(false+true);
console.log(false-true);

var num = 10;
var str = "5";
var result = num + str;
console.log(result);  // Output: "105"


var str = "10";
var num = Number(str);
console.log(num);  // Output: 10



```

### use strict:

```js

function demo(){
           xy="hi";
           var num=0777;
            console.log(num);
        }
        demo();
        console.log(xy);

```


### Diff between let , const and var:

```js

var a=10;
var a=20;

console.log(a);


let b=10;
let b=20;


```

### Scopes

```js

function demo(){
    for(var i=10;i<13;i++){
        console.log(i);
    }
    console.log(i);




    if(true){
        let a=10;
        var b=15;
        console.log(a);
        console.log(b);
    }
    console.log(b);
    console.log(a);
   
}

demo();


```


### Hoisting

```js


console.log(a);
var a=10;
console.log(a);


console.log(demoFunction());

function demoFunction(){
    return "Hello";
}


```

### Execution Context:

```js

console.log(a);
var a=10;
console.log(a);

function demoFunction(){
    var demotext="Hello";
    return demotext;
}

console.log(msg)
var msg=demoFunction();
console.log(msg);
var msg2=demoFunction();

```


### Operator in JS:

Task:

```js

let a=10;
let b=4;
let c=6;
let d=10;

var ans= a+ ++b+c+d++;
console.log(ans);



let a=5;
let b="5";

console.log(a===b);

```
- diff bet == and ===


### Conditional statement.


- task 

- what is truthy and falsy value

- ternary operator:

It is a short hand for if else statement.

console.log(age>18: "allowed to vote" : "not allowed to code")

```js


let number=prompt("Enter 0");
number=parseInt(number);

if(number===0){
    alert("User entered zero");
}




function loopingExamples(){

    for(let i=0;i<5;i++){
        if(i==3){
            continue;
        }
        else if(i==4){
            // break;
            return;
        }
        console.log(i);
    }

    console.log("Out of for")


}

loopingExamples();

```
