// Shallow copy 
/* when data is copied from one variable to another using a simple assign '=' 
it creates a shallow copy which is just a top level copy of original data but 
the memorylocation remains the same 
*/
let student = {
    sid: "S102",
    sname: "Jack",
    saddress: "India",
    course: "Web Development"
}

// console.log("Student=> ", student);
// let newStudent = student;    // Shallow copy
// console.log("New Student=> ", newStudent);

// console.log("---------After modification----------");
// newStudent.sname = "Jill";
// console.log("Student=> ", student);
// console.log("New Student=> ", newStudent);

// Deep Copy
/* A deep copy creates an independent copy of the all nested values and data of original object, 
thus if one is changed or removed from memory address then other shall exist. We use JSON.parse() and JSON.stringify() methods
to make a deep copy.*/

console.log('============== DEEP COPY =============');
let newStudent = JSON.parse(JSON.stringify(student))
console.log("Student=> ", student);
console.log("New Student=> ", newStudent);

console.log("---------After modification----------");
newStudent.sid = "S103"
newStudent.sname = "Jill";
console.log("Student=> ", student);
newStudent.course = "App Developement"
console.log("New Student=> ", newStudent);






// Using Lodash Lib to Deep Copy -- Limitation of JSON.stringify
 const lodash = require('lodash');
 let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());