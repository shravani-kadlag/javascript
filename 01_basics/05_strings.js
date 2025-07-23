const name = "SHRAVANI";
const repoCount= 50;


// console.log(name + repocount +"value");
console.log(name)
console.log(`Hello my name is ${name } and my repo count is ${repoCount}`);


const gameName =  new String ('shravani')
console.log(gameName[0]);

// console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString =  gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newstringone = "   SHRAVANI   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://shravani.com/shravani%20kadlag";

console.log(url.replace('%20' ,'-'));

console.log(gameName.split('-'));