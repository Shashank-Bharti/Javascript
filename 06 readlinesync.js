// Using readlineSync module to take input from terminal
const readlineSync = require('readline-sync');

const userName = readlineSync.question('May I ask your name?. ')
console.log(`Welcome!, ${userName}`);

const userAge = readlineSync.question('May I know your age?. ')
const userAgeNumber = Number(userAge)

if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}