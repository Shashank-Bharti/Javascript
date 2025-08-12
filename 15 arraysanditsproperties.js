// Arrays
let students  = ['shashank','ratan','aayush','rajat'];
console.log(students);
console.log(typeof students);

// Creating arrays wirh "new keyword Constructor"
let a = new Array(10,20,30)
console.log(a);


// Mixed arrays 
let mixedArray = ['Prakash',10,[1,2,3],true,{Name:"Kazuto"}]
console.log(mixedArray);

// Acessing arrays

console.log(mixedArray[1]);
console.log(mixedArray[2][1]);
console.log(mixedArray[1] + mixedArray[2][1]);
// Accessing Last array element
let lst = a[a.length - 1]
console.log('This is the last element ' + lst);

// iterating over a array
// For-of Loop

for (let name of students) {
    console.log(name);
    
}
// using for in loop
for (let index in students){
    console.log(students[index]);
    
}
// Modifying arrays 
// Val assignment to index
a[1] = 60
console.log('reassigned array '+ a);


// Adding elements via - PUSH Method

students.push('Mina')
console.log(students);

// Removing elements - 

// POP 
students.pop() //removes last element
console.log(students);

// SHIFT
students.shift() //Removes First Element
console.log(students);

// SPLICE
students.splice(1,1,'viren'); //removes elemnt at index 1 and replaces it with given string
console.log(students);

// Array Methods

// Map
let upperCaseNames = students.map(name => name.toUpperCase());
console.log(upperCaseNames);

// Filter
let longNames = students.filter(name => name.length > 5);

// Reduce 
array= [1,2,3,4,5,6];

const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum,0);
console.log(array);
console.log(sum);

// Using some 
const lessthanfourCheck = (element) => element < 4;
const lessthanFour =array.some(lessthanfourCheck)

console.log(array);
if (lessthanFour){
    console.log('at least one element is less than four');
    
}else {
    console.log("All elements are greater than four");
    
}
// Array Concatenation

let frontend = ["HTML", "CSS", "JS", "React"];
let backend = ["Node.js", "Expess.js"];

let fullstack = frontend.concat(backend)
console.log(fullstack);

