const user ={
    username:"shravani",
    price:1000,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)

//function chai(){
    //let username = "shravani"
    //console.log(this)
//}
//chai()

//arrow
//const chai = () =>{
    let  ussername="shravani"
    console.log(this)
//}
//chai()

//const addTwo =  (num1,num2)=>{
  //  return num1+num2
//}
//console.log(addTwo(3,4))

const addTwo =  (num1,num2)=> num1+num2 //  implicit return
const addTwo =  (num1,num2)=> (num1+num2 )
// if used {} return statement is used ,if used () no need of return
const addTwo =  (num1,num2)=> ({username:"shravani"}) // to return object ({}) is needed
console.log(addTwo(3,4))