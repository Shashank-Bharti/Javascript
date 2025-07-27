// AND &&
// Returns true when if all conditions fulfilled otherwise false

const physics = 85
const maths = 90
const chemistry = 85
const passingMarks = 45
if (physics > passingMarks && maths > passingMarks && chemistry > passingMarks){
    console.log('You Passed');
    
}else{
    console.log('You Failed');
    
}
// OR ||

if (physics >= 90 || maths >= 90 || chemistry >= 90){
    console.log('You can apply for engineering');
    
}else {
    console.log('You cannot apply for engineering');
    
}

// NOT ! 
// true -> false, 
// false -> true

const isStudentEligible = false
if (!isStudentEligible ){
    console.log('You can apply for engineering');
} else {
    console.log('You cannot apply for engineering');
}

// NULLISH COALESCING ??
/*
    used to assign default value to a variable when the value is either null or undefined
    particularly used for null and undefined values as a fallback method 

    syntax: let result = value ?? defaultValue;

    If value is neither null nor undefined, it will return value.
    If value is null or undefined, it will return defaultValue.
*/

let firstname = "shashank"
console.log(firstname ?? "Unknown"); // returns "shashank"

let lastname = null;
console.log(lastname ?? "Ninja"); // returns "Ninja"

// Incase of Empty str ""

let middlename = ""
console.log(middlename ?? "Unknown"); // returns ""
// nullish coaleascing reads empty str as falsy value whereas OR || operator reads it as falsy
// nullish wont return fallback value for falsy values like 0 or ""
// result with OR operator
let firstName = "";
console.log(firstName || "Hidden Geek");  // Output: "Hidden Geek"

// Summary of Key Differences Between || and ??:
// || (OR operator) treats all falsy values (false, 0, "", null, undefined, etc.) as false.
// ?? (Nullish Coalescing operator) only considers null and undefined as "nullish" values, and treats other falsy values (0, "", false) as valid.