// Anonymous function are simple functions created to be used a fallback or immeadiate invoked functions expression  (IIFE)
// Basic Syntax
let anonymousFunction = function () {
    console.log('I am an Anonymous function');
}

anonymousFunction()


//  Function expression
/*
When you assign an anonymous function to a variable, it is known as a function expression. This makes the variable a function, not just a simple variable.
*/
let greet = function(){
    console.log('Hello Folks!');
    
}
greet()

console.log(typeof greet); //function

// Named Function exp
let greeting = function greetMsg(){
    console.log('Hello there');
    
}
greeting()

// greetMsg cannot be called outside however it can be inside ina recursive call

let factorial = function fact(n){
    if (n<=1) return 1;
    return n * fact(n-1)
}

console.log(factorial(5));

// Practical Use Cases

// Callbacks

setTimeout(function() {
    console.log("This is a callback function!");
}, 1000);

// IIFE

(function() {
    console.log("IIFE executed immediately!");
})();

// DOM Event Handlers

/* document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
*/
 