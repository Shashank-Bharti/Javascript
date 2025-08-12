// TERNARY OPERATORS

// condition ? expressionIfTrue : expressionIfFalse
const readlineSync = require('readline-sync');

const userInput = readlineSync.question('Enter Marks Obtained: ');
const passingGrade = 35;
// console.log(userInput >= passingGrade ? 'You Passed':'Try Again!');

const result = userInput >= passingGrade?'You Passed!':'Try again!';
console.log(result);


// Nested ternary operation

const grade = userInput > 90 ? 'A': userInput > 80 ? 'B' : userInput > 70 ? 'C':userInput >60 ? 'D': 'F';

console.log(grade);

// Comma Operator
let n1 ,n2 
const res = (n1 = 5,n2 = 5,n1+n2)
console.log(res);

// Unary Operators 
let i = 0
console.log(++i);
console.log(--i);
