//falsy values

//BigInt 0n,"", false ,0 ,-0 , null , undefined , NaN

//truthy values

//"0", 'false'," ",[],function(){},{}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("empty")
}

//Nullish coalescing Operator (??):null undefined

let val1;
//val1=5??10
//val1=null??10
val1=null??10??20
//var1=undefined??10
console.log(val1)

//ternary operator

//condition ? true:false

const iceTeaPrice =100
iceTeaPrice >= 80 ? console.log("less than 80"):console.log("more than 80")