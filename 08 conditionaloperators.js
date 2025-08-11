// CONTROL FLOW

// if else statement
// if (condition) {
//    code to be executed if condition is true
// }else {
//     code to be executed if condition is false
//}

const readlineSync = require('readline-sync');

const userName = readlineSync.question('Enter Your Username: ');

if (userName === "shashank") {
    console.log('You are Logged In!');
}else {
    console.log('Login Failed!');
    
}

const userAge = parseInt(readlineSync.question('Enter your age: '));
if (userAge === 26) {
    console.log('You can access the premium section.');
}else if (userAge > 18){
    console.log('You are Eligible!');
}else {
    console.log('You are too Young.');
}

// Javascript Switch Statements
let randInt = () => {
    a = Math.floor(Math.random()*4)
    return a
}

const int = randInt()
switch (int){
    case 1 :
        console.log('Random Integer - 1');
        break;
    case 2 :
        console.log('Random Integer - 2');
        break;
    case 3 :
        console.log('Random Integer - 3');
        break;
    default:
        console.log('Unknown Integer');
        
}



// Logical operator AND - '&&'

const number = readlineSync.question('Enter a number: ');
const remainderAfterDivisionByThree = number % 3;
const remainderAfterDivisionByFive = number % 5;

if (remainderAfterDivisionByThree == 0 && remainderAfterDivisionByFive == 0){
    console.log('Fizz');
    
}else{
    console.log('The number is not divisible by both 3 and 5');
    
}

// The OR -- (||) Operator 

if (remainderAfterDivisionByThree == 0 || remainderAfterDivisionByFive == 0){
    console.log('Buzz');
    
}else{
    console.log('The number is not divisible by either 3 or 5');
    
}

const remainderAfterDivisionBySeven = number % 7;

if (remainderAfterDivisionBySeven === 0){
    console.log('BuzzBuzz');
}else {
    console.log('The number is neither divisible by 3,5 and 7');
    
}

