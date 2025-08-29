 // try catch finally 
// try{
//     const a = b;
//     console.log(a);
    

// }catch (error){
//     console.log('The error was: ',error);
    
// }finally {
//     console.log('runs every time');
    
// }

// explicitly causing errors
/*try {
    const a = 10;
    {
        if (a === 10) {
            throw Error("Error is caused due to throw statement");
        }
    }
    console.log(a);
} catch (error) {
    console.log("The error found here is", error);
} finally {
    console.log("runs each and every time");
}*/

// Error using Objects
function A() {
    B()
}
function B() {
    C()
}
function C() {
    throw new Error('Hello Error hai yahan pai')
}
try {
    A()
}
catch (error) {
    console.log(error.stack)
    console.log(error.message)
    console.log(error.name)
}

// handling async erors 
async function f(){
    try{
        let response = await fetch('hrrps://invalid.url')
        let data = await response.json();
        console.log(data);
    } catch (error)
 {
    console.error('Error while Fetching data: ',error)
 }}

 f()