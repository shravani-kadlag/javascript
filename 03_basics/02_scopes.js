//{}  are scope

//var c=10  var never used

let a =500
if (true){
    let a=20
    //const b=30,
    //var c=300
    console.log("INNER VALUE:" , a)
}
//console.log(c)
console.log(a)

//NESTED SCOPE 

function One(){
    const username="shravani"

    function Two(){
        const website="youtube"
        console.log(username)
    }
    console.log(website)

    Two()
}
//One()

if(true){
    const username ="shravani"
    if(username==="shravani"){
        const website ="youtube"
        console.log(username+ website)
    }
    //console.log(website)  gives error cannot call outside 


}
//console.log(username) gives error does not have scope

//***************interesting ***************

console.log(addone(5))
function addone(num){
    return  num +1
}
addone(5)

//console.log(addtwo(5)) // gives error as it cannot acces befor intialization as it is hold into variable
const addtwo = function(num2){
    return  num2+2
}
addtwo(5)