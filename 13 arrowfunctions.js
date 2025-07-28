// Another way to write function (by not using the function keyword)

// Normal -
let calcAdd = function (x,y){
    return x + y;
};
console.log(calcAdd(5,5));

//  Arrow function
let calcSubtraction = (x,y) => {
    return x - y;
};
console.log(calcSubtraction(6,5));

// Simplified version
let calcMultiply = (x,y) => x * y;
console.log(calcMultiply(2,2));

// Single Parameter
let calcSquare = x => x**2;
console.log(calcSquare(5));

// arrow functions and Lexical this
/*function Person(){
    this.age = 0

    setInterval(()=>{
        this.age++;
        console.log(this.age);
    },1000)
    }
    let p = new Person()
*/

// ternary operations using arrow 
let newFunc = (x,y) => x > y ? x + y : y - x;
console.log(newFunc(8,9));

// Other example

let numbers = [1,2,3,4,5];
let squares = numbers.map(x=>x*x);
console.log(squares);

