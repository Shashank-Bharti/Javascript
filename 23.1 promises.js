// Promise Syntax 

/*      let promise = new Promise((resolve, reject) => {
        // Perform async operation
        if (operationSuccessful) {
            resolve("Task successful");
        } else {
            reject("Task failed");
        }
});*/



let checkEven = new Promise((resolve,reject) => {
    let num = Math.floor(Math.random()*10) + 1 
    console.log(num);
    
    if (num % 2 === 0) resolve ("Number is even")
    else reject("Number is odd")
    
})

checkEven
    .then((message)=>console.log(message))
    .catch((error)=>console.log(error))

// Promise.all
/*Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects. */

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

// Promise.allsettled

Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results)=>console.log(results)
    )


// Promise.race
/*Promise.race() Method resolves or rejects as soon as the first promise settles.*/

Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));

// Promise.any

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

// promise.resolve
Promise.resolve("Immediate success")
    .then((value) => console.log(value));
// promise.reject
/*immediate reject*/
Promise.reject("Immediate failure")
    .catch((error) => console.error(error));

// promise.finally
Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));