// using var - old method for defining a variable (function scoped)
var text = "Hello, World";
console.log(text);

// using let - modern way to define a variable (block scoping)
let greet = "This Greeting used let keyword";
console.log(greet);

// reassignment of variables (let & var)
text = "Hello , Everyone"
console.log(text);
greet = "This greet was reassigned"
console.log(greet);

// using const - makes sure that constant values doent get reassigned
const num = 12
console.log(num);

// num = 13
// console.log(num); TypeError: Assignment to constant variable.

// NAMING CONVENTION OF VARIABLES

// Characters Allowed: A variable name can consist of letters (both uppercase and lowercase), numbers, the dollar sign ($), and the underscore (_).
// No Leading Numbers: A variable name cannot start with a number but can end with one.
// No Special Characters: Avoid special characters such as @, #, -, or brackets.

let userName; //camelCase
let _isValid = true; 
let $price = 100; // $ - Complements code
let number1;
let number_2; //Underscore
