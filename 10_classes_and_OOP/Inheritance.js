class User{
    constructor(username){
        this.username=username
    }
    LockMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai= new Teacher("chai", "chai@123.com","123")

chai.addCourse()
const masalachai=new User("masalachai")

masalachai.LockMe()
