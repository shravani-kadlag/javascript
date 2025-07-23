const myarray=[1,2,5,7,8,]

console.log(myarray[0])

//Array Methods

myarray.push(10);
//myarray.pop()

myarray.unshift(10) // places the element at start that is at 0 index (time consuming)
myarray.shift()//removes the unshift element

const newarray=myarray.join()
//console.log(myarray);
//console.log(newarray)
//console.log(typeof newarray)//string

//Slice , splice
console.log("A "  ,myarray)

const myn1= myarray.slice(1,3)

console.log(myn1)
console.log("B ",myarray)

const myn2=myarray.splice(1,3)
console.log("C ", myarray )
console.log(myn2)

