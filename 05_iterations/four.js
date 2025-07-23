const myObject ={
    js: "javascript",
    rb: "rubby",
    cpp:"c ++",
}
for (const key in myObject){
    console.log(`${key} shortcut is  for ${myObject[key]}`)
}

const programming =["js","c++","java"]
for (const key in programming){
    console.log(programming[key] )
}