// Using the console.log 
const a = 5
console.log("Value of a",a);

// Using debugger key
function test() {
    let n = 42;
    debugger; // Execution pauses here
    console.log(n);
}
test();

// debug using promises
fetch("invalid-url").catch(error => console.error("Request failed", error));

// Memory Leak detection
let b = [];
setInterval(()=>A.push("data",1000))