// Function composition
function add(x) {
  return x + 2;
}
function mul(x) {
  return x * 3;
}
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
var res = compose(add, mul)(4);
console.log(res);

// Currying
/*
Currying transforms a function that takes multiple arguments into a series of functions that each take one argument. 
This allows partial application of the function.
*/

function greet(msg) {
  return function (name) {
    return msg + " " + name;
  };
}
var newGreet = greet("Hello!");
console.log(newGreet("Shashank"));

// Memoization
/* it is a technique where function results are cached so that repeated calls with the same arguments return faster. 
This is particularly useful for expensive function calls.*/

function memoize(func) {
  var cache = {};
  return function (arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      var res = func(arg);
      cache[arg] = res;
      return res;
    }
  };
}

function slow(input) {
  console.log("Computing...");
  return input * 2;
}

var fast = memoize(slow);
console.log(fast(5));
console.log(fast(5));

const cache = {};

function square(n) {
  if (cache[n]) {
    return cache[n]; 
  }
  console.log(`Calculating square of ${n}`);
  cache[n] = n * n;
  return cache[n];
}

console.log(square(5));
console.log(square(5));

// Use Cases
// 1. Passing Functions as Args
function greet2(name,callback) {
    console.log("Hello, " + name);
    callback() 
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet2("Ajay", sayGoodbye);