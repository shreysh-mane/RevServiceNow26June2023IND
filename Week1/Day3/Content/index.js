

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



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((num,element,arr) =>{
//     return num % 2 === 0
// });
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// let products=[{name:"Mobile", price:20},{nane:"Tab", price:30}];

// const filteredObj= numbers.filter(ele => {
//     return ele.price>25;
// })

// console.log(filteredObj);


let str="abc";

for(let i=0;i<str.length;i++){
    console.log(str[i]);
}