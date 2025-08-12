// function wrapped in function

function greet (){
    console.log('Hello!');
    
}
function person (user,action){
    action()
    console.log(user);
};

person("Shashank",greet)

// Popular H.O.Fs 
// 1. map

let arr = [1,2,5,6,7];
let square = arr.map((num)=> num*num)
console.log(square);

// 2. filter

const even = arr.filter((num) => num%2 === 0);
console.log(even);

// 3. reduce

const sum = arr.reduce((acc,curr)=> acc+curr, 0)
console.log(sum);

// 4. forEach 

arr.forEach((num) => console.log(num*2));

// 5. find

const fEven = arr.find((num) => num % 2 === 0);
console.log(fEven);

// 6. some
const hasNeg = arr.some((num)=> num < 0)
console.log(hasNeg);

// 7. every
const hasPos = arr.every((num)=> num > 0)
console.log(hasPos);



