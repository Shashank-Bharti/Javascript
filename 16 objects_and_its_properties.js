// Creation of object using obj literal
const obj1 = {
    Name : "Shashank",
    Age : 21,
    Place : "Patna"
}
console.log(obj1);

// using Object constructor

const obj2 = new Object()
obj2.Name = "Sudhanshu"
obj2.Job = "Student"
obj2.Place = "Purnea"
console.log(obj2);

// Accessing elements
console.log(obj1.Name + obj2["Name"]);

// Modifying elements
obj1.Age = "Younger than you ;)"
console.log(obj1);

// Adding properties
obj1.Job = "Student"
console.log(obj1);

// deleting properties
delete obj1.Age
console.log(obj1);

// check if property exists
console.log("Age" in  obj1);
console.log(obj1.hasOwnProperty("Job"));

// Iteration

    // 1. Using for.. in loop
    for (let key in obj1){
        console.log(key + " : " + obj1[key]);
    }

    // 2. Using object.entries() and map()
    Object.entries(obj1).map(entry => {
        let key = entry[0];
        let value = entry[1];
        console.log(key, value);
    });
    
    // 3. Using forEach.. and Obj.keys()
    Object.keys(obj1).forEach(key => {
        const value = obj1[key];
        console.log(`${key} : ${value}`);
    })

// Merging
let obj3 = {Hobby : "Anime"}
let obj4 = { ...obj1, ...obj3}
console.log(obj4);

// object length
console.log(Object.keys(obj4).length);

// Recognize Object
console.log(typeof obj4 === "object" && obj4 !== null);

// Mark enumerable or non enumerable 
Object.defineProperty(obj4, 'Job',{
    value : 'Student',
    enumerable : false
})

console.log(Object.keys(obj4));
console.log(obj4)
console.log(obj4.Job)
;

// Property attributes
Object.defineProperty(obj4, 'Name', {
    value: 'Shashank',
    writable: false,
    configurable: false,
    enumerable: true
});

obj4.Name = "Rachit"
console.log(obj4.Name);
console.log(obj4);
 
// Getter and Setters

let obj = {
    fName: 'Marin',
    lName: 'Kitagawa',
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
};

console.log(obj.fullName);
obj.fullName = 'Gojo Wakana';
console.log(obj.fName);
console.log(obj.lName);

console.log(obj);

// 
 const obj5 = {a:1,b:2}
 delete obj5.a
 console.log(obj5);
 