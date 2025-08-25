// Callback functions
function a(wrapper){
    console.log('hello');
    wrapper()
}
function b(){
    console.log('World!');
    
}
// b is a callback for a 
a(b);
console.log('printed Instantly');

setTimeout(function delay(){
    console.log('printed after delay');
    
},4000)


// fetch callback  
// fetch("http://...")
// .then(function(){
//     //response logic
// })

// Callback Hell

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});