class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
const shravani=new User("Shravani")
//console.log(shravani.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const Iphone = new Teacher("Shravani", "shra@gmail.com");
Iphone.logMe()