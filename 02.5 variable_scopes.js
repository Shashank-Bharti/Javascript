// Types of Scopes In JS
/*
Global Scope : Var declared outside of a function or a block are accessible anywhere in the code
*/ 
var x = 12;
console.log(x);
let y = 45;
console.log(y);

/*
Function Scope: Var declared with var inside of a fn are only accessible within that function
*/ 
function example (){
    var a = 10;
    let b = 20;
    const c = 40;
    console.log(a,b,c);

}
example();
// console.log(a); :-> refernece error

/* 
Block Scope: Variables declared with let or const inside a block ({}) are accessible only within that block.
*/
if (true){
    var a = 15
    let c = 50
}
console.log(a);
// console.log(c); : -> reference error

/*
Modular Scope: Introduced in ES6, ES Modules are the standard way to organize JavaScript code into reusable and maintainable chunks. Each module has its own scope, and anything declared within a module is private by default unless explicitly exported. 
*/

const {greet , greet2} = require('./greet.js')

console.log(`${greet} World!.`);
console.log(greet2);

/*
Lexical Scope (Closures)
Lexical scope means a function can access variables from its outer scope even after the outer function has finished execution.
*/

function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); // Accessing parent's scope
    }
    inner();
}
outer()