// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log("End");

// Heavy computations block the event loop, making the app unresponsive.

// while(true)
// {
//     console.log('Blocking...')
// }


// console.log('this will never reach');

// Delayed excution of setTimeout
console.log("Start");
setTimeout(() => 
document.querySelector('h2').innerHTML = 'Inside Timeout', 1000);
for (let i = 0; i < 1e9; i++) {} // Long loop
console.log("End");

// Priority Taks / Microtask
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Callback Hell
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);