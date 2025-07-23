const accountId= 22107
let accountEmail = "kadlagshravani2004@gamil.com"
var accountPassword = "300524"
accountCity= "Pune"

// accountId= 2  not allowed cannaot change accountid

accountEmail="shravani@gamil.com"
accountPassword="12345"
accountCity="Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])
