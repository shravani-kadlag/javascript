const user={
    username:"Shravani",
    loginCount:9,
    signedIn:true,

    getUserDetails:function(){
        console.log(`Username: $this.username`);
    }
}
console.log(user.username);
console.log(user.getUserDetails())

function User(username,loginCount,IsLoggedIn){

    this.username=username;
    this.loginCount=loginCount;
    this.IsLoggedIn=IsLoggedIn;
    return this;

}
const UserOne=new User("Sharavnai",12,20);
console.log(UserOne);