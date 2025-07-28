/* Functions Syntax:

function functionName (Param1,Param2,...){
    Function Body
}
    */

function calcAddition (number1,number2){
    return number1+number2;
}

console.log(`Result: ${calcAddition(50,30)}`);

function greetName(name){
    return `Hi! ${name}, How are you?`
}

console.log(greetName("Shashank"));

// Custom Print function instead of console.log

function print (statement){
    return console.log(statement)
}

print(3+2)
print("Hello World!")