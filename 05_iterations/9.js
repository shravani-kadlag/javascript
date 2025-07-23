const mynums =[2,4,6]

//const mytotal = mynums.reduce(function (acc,currval){
 //   console.log(`acc :${acc} , currentvalue : ${currval}`)
 //   return acc+currval
//},0)
//console.log(mytotal)

const mytotal = mynums.reduce((acc,curval)=> acc+curval,0)
console.log(mytotal)

const shoppingcart =[
    {
        itemname:"js course",
        price:1000
    },
    {
        itemname:"DSA course",
        price:1500
    },
    {
        itemname:"JAVA course",
        price:1200
    },
    {
        itemname:"C++ course",
        price:1100
    },
]

const payable = shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(payable)