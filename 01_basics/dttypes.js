// Primitive


// 7 types :String ,Symbol ,Number ,Undefined ,Boolean ,BigInt

const score=100;
const scoreValue=100.3;

const isLoggedIn= false;
const outsideTemp =  null;
let userEmail ;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)

//Reference (Non Primitive)

// Array ,Objects ,Funcions

const heros = ["shaktiman", "naagraj","doga"];
let myObj ={
    name:"Shravani",
    age:21
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros) //object


//https://262.ecma-international.org/5.1/#sec-11.4.3


//**************************************************************** 

//stack (primitive)(copy) ,  Heap(Non-Primitive) (reference)

let myYoutubename= "Shravanikadlagdotcom"

let anothername = myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email = "shravani@google.com"

console.log(userOne.email);
console.log(userTwo.email);