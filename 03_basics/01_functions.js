function calculatecartPrice(num1){
    return num1
}

//console.log(calculatecartPrice(200,300,400))

//outputs [200]*/




function calculatecartPrice(...num1){
    return num1
}

//console.log(calculatecartPrice(200,300,400))

//outputs= [200,300,400]  ...num1 is a rest operator*/


//*************

function calculatecartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculatecartPrice(200,300,400))

//outputs [400] as val1 =200 and val2=300 

const user={
    username:"shravani",
    price:99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

// another way 
//handleObject({
//username:"shravani",
//price:199
//})

const myNewArray = [200,300,400]

function returnsecondvalue(getArray){
    return getArray[2]
}
console.log(returnsecondvalue(myNewArray))
console.log(returnsecondvalue([100,400,5000]));