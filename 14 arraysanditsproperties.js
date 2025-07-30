// Arrays
let students  = ['shashank','ratan','aayush','rajat'];
console.log(students);
console.log(typeof students);

// Mixed arrays 
let mixedArray = ['Prakash',10,[1,2,3],true,{Name:"Kazuto"}]
console.log(mixedArray);

// Acessing arrays

console.log(mixedArray[1]);
console.log(mixedArray[2][1]);
console.log(mixedArray[1] + mixedArray[2][1]);

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
