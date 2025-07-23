const score =400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString()) //100
console.log(balance.toString().length)//3

console.log(balance.toFixed(2)) //100.00

const anothernumber=123.8699

console.log(anothernumber.toPrecision(3))

const Hundreds=100000
console.log(Hundreds.toLocaleString('en-IN'))

//***************************MATH *************************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.min(43,8,0,1))

console.log(Math.max(4,10,56))

console.log(Math.random())

console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10) +1)

const min =10
const max=20

console.log(Math.random()*(max-min+1))+min