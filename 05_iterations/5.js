const coding = ["java", "c++","Rubby" ,"js"]

coding.forEach( function(item){

})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)

})

const myLanguage = [
    {
        language : "java",
        filename:"java"
    },
    {
        language : "ruby",
        filename:"rb"
    },
    {
        language : "python",
        filename:"py"
    }
]

myLanguage.forEach((item)=>{
    console.log(item.language)
})

const nums=[1,2,3,4,5,6]

//const newnums = nums.filter((item)=>item>4)
//console.log(newnums)

const newnums = nums.filter((item)=>{
    return item>4})
console.log(newnums)