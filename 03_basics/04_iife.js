//Immediately Invoked function Expression(IIFE)


(function chai(){
    console.log('DB CONNECTED')
})();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('shravani')
