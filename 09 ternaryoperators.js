// ternary operators
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
