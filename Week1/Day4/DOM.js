// See document object
console.log(document)

// check body element.
console.log(document.body)


//See all child nodes
console.log(document.body.childNodes)

// Get only element Nodes
console.log(document.body.children);


// Changing color of last child.
const parentDiv=document.getElementsByClassName("mainDiv")[0];
parentDiv.lastElementChild.style.color="red";

console.log(parentDiv.innerHTML);
console.log(parentDiv.textContent);


// Selecting DOM Elements

const headElement=document.getElementById("heading");

console.log(headElement);

const descriptionElements=document.getElementsByClassName("description");

console.log(descriptionElements);

const headElementByQuery=document.querySelector("#heading");

console.log(headElementByQuery);



// Change the data inside any element.
headElement.innerHTML="BYe BYe";


// Events in JS

// Event Registration:

//1. HTML Attribute
function attributeEvent(){
    console.log("Attribute")   
}




//2. addEventListener:


const p2=document.getElementById("p2");

function ListenerEvent(){
    console.log("ListenerEvent");
    // p2.innerHTML="Got Clicked";
    // p2.style.height="200px";
    p2.style.backgroundColor="red";

}



p2.addEventListener('click',ListenerEvent);


// Event Object:

// Example: Event handler function with Event object
function handleClick(event) {
    // Access event properties
    console.log('Event:', event);
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
  }
  
  // Register the event handler
  const button = document.querySelector('#myButton');
  button.addEventListener('click', handleClick);
  


// Targeting text of another element:

const textElement=document.getElementById("changedText");

const helloBtn=document.getElementById("btn-hello");

const byeBtn=document.getElementById("btn-bye");

function changeToHello(){
    textElement.innerHTML=event.target.innerHTML;
}


let a=10;

function changeToBye(){
    textElement.innerHTML=a;
}

helloBtn.addEventListener('click',changeToHello);
byeBtn.addEventListener('click',changeToBye);


// Get Data from form.


// Get the form element
const form = document.getElementById('myForm');

// Event listener for form submission
form.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form submission

  // Get form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create an object to store form data
  const formData = {
    name: name,
    email: email,
    message: message
  };

  // Display the form data
  console.log(formData);

});

/////////////////////////////////////////////////////////////////////////////////////////////////



var divElement = document.getElementById("myDiv");

function addElement(){

  //Creating new Element.
  var newElement = document.createElement("p");

  // Setting clas sand text for that element
  newElement.className = "c1";
  newElement.textContent = "This is the new element";

  // Adding that element to parent element.
  divElement.appendChild(newElement);


}
divElement.addEventListener('click', addElement);


//////////////////////////////////////////////////////////////////////////////////////////

//Event propagation:

// 1. Bubbling

// Example: Event bubbling
// const parentElement = document.querySelector('#parent');
// const childElement = document.querySelector('#child');


// function parentHandler() {
//   console.log('Parent clicked');
// }

// function childHandler() {
//   console.log('Child clicked');
//   event.stopPropagation(); // Stop event propagatione
// }


// parentElement.addEventListener('click', parentHandler);

// childElement.addEventListener('click',childHandler );



//2. Event Capturing

const parentElement = document.querySelector('#parent');
const childElement = document.querySelector('#child');


function parentHandler() {
  console.log('Parent clicked');
  // event.stopPropagation();
}

function childHandler() {
  console.log('Child clicked');
}


parentElement.addEventListener('click', parentHandler,true);

childElement.addEventListener('click',childHandler );


