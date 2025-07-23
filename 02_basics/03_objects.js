//singleton

//object.create (constructor method)

//object literals
const mySym=Symbol("key1")
const JsUser={
     name :"shravani",
     "full name" : "Sharavni Kadlag"  ,
     age : 21,
     location :"pune",
     email: "shravani@gmail.com",
     mySym:"mykey1",
    /* //shravani@gmail.com
shravani@gmail.com
Sharavni Kadlag
mykey1
shravani@chatgpt.com
{
  name: 'shravani',
  'full name': 'Sharavni Kadlag',
  age: 21,
  location: 'pune',
  email: 'shravani@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}*/

//if used mySym
// /*
/*shravani@gmail.com
shravani@gmail.com
Sharavni Kadlag
undefined
shravani@chatgpt.com
{
  name: 'shravani',
  'full name': 'Sharavni Kadlag',
  age: 21,
  location: 'pune',
  email: 'shravani@chatgpt.com',
  mySym: 'mykey1',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ]
}*/

     isLoggedIn:false,
     lastLoginDays :["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="shravani@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "abc.com"
console.log(JsUser.email) 
console.log(JsUser)

JsUser.greetings = function(){
    console.log("HELLO")
}

JsUser.greetings2 = function(){
    console.log(`HELLO, ${this.name}`)
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());