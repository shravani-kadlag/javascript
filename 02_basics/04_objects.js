//singletons

//const tinderUser= new object)()
const tinderUser ={}
tinderUser.id="abc@123",
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"efg@123.com",
    fullname:{
        userfullname:{
            firstname:"shravani",
            lastname:"kadlag"
        }    
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3= {...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"s123@gmail.com"
    }
]
//users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//de-strucuring
const course={
    coursename:"JS",
    price:99,
    courseInstructor:"Shravani"
}
//course.courseInstructor

const{courseInstructor}= course
const{courseInstructor:Instrutor}= course  //restructuring
console.log(courseInstructor)