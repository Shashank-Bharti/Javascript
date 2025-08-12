// String Concatenation using "+"

let username = "Shashank"
let age = 21
let message = "Hi!, My name is "+ username +" and I am " + age +" years old."
console.log(message);

// Template Literal "`" with embedded expression "${}"

let brand = "Realme"
let model = "GT 6T"
let message_2 = `Congratulations! ,Your order of ${brand} ${model} has been successfully placed.`
console.log(message_2);

// Multiline text
let hobby = "Listening to Music"
let intro = `Hi!,
My name is ${username} and I am ${age} years old.
I love ${hobby}, and reading documentations.`
console.log(intro);

// Chaining Operator (?.)
const obj = {name : "Shashnk",address:{city: "Patna"}};
console.log(obj.address?.city);
console.log(obj.address?.phone);

for (let i = 0;i < 3;i++){
    if (i === 1)break;
    console.log(i);
}
