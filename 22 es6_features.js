// Object Destrcturing using es6 feature

let obj = {
    name:"shashank",
    gender: "Male",
    age:21

}

const {name,age} = obj;
console.log(name,age);

// Array Destructuring
const a = [ "red", "blue", "green" ];
const [first, second] = a;
console.log(first, second);

// For /of  loop

const b = [ "apple", "banana", "cherry" ];
for (const item of b) {
    console.log(item);}
const s = "hello";
for (const char of s) {
    console.log(char);
}


// Maps 
 const map = new Map()
 map.set("a",1)
 map.set("c",3)
 console.log(map.get("a"));
 
//  Sets
const set = new Set([ 1, 2, 3, 3 ]);
console.log(set);

// Promise
const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
};

fetch().then(data => console.log(data));
