// REST OPERATOR
function myfunc(...args){
    console.log(args);
    
}
myfunc(1,2,3,4,5,6)

// Rest in function 
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4,5))

// Use cases of Rest params
// 1. Collecting functional args

function greet(greeting, ...names) {
    return `${greeting}, ${names.join(' and ')}`;
}
console.log(greet("Hello!","Aditi", "Sonam"));

// 2. Filtering properties
const {a, ...rest} = {a: 1, b: 2, c: 3}
console.log(a);
console.log(rest);

// 3. Destructuring an array
const [first, ...other] = [1,2,3,4,5]
console.log(first);
console.log(other);

// 4. Functional Default Params
function mul(factors, ...nums) {
    return nums.map(num => num * factors )
}

console.log(mul(3,1,2,3,4,5));

// SPREAD OPERATOR

// expanding arrays
const n = [1,2,3]
const ne = [...n,4,5,6]
console.log(ne);

// Use Cases of Spread
// 1. Merging arrays
const arr1 = [1,2]
const arr2 = [3,4]
const arrcombined = [...arr1, ...arr2]
console.log(arrcombined);

// 2. Cloning arrays
const original = [1,2,3,4,5]
const clone = [...original]
console.log(clone);

// 3. Combining Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined)

