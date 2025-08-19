// Inheritance - allows one class or object to derive properties and behaviours from another.

// 1. prototype based inheritance 
/*The prototype stores shared properties and methods, allowing all instances of a type to access them.*/

function Animal(name){
    this.name = name
}
Animal.prototype.speak = () => {
    console.log(`${this.name} makes a sound`);
    
}
// child constructor function 

function Dog(name){
    Animal.call(this,name)  //inherits property

}
// Inherits methods from Animal

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;

//  Adding new method to Dog

Dog.prototype.bark = function () {
    console.log(`${this.name} barks: Woof!`);
};

const myDog = new Dog("buddy")

myDog.bark()
myDog.speak()

// ES6 Class based Inheritance
class one {
    constructor(name) {
        this.name = name
    }
    speaks() {
        return `my name is ${this.name}`
    }
}
class two extends one {
    constructor(name) {
        super(name)
    }
}
const o = new two('Shashank')
console.log(o.speaks())

// Mixins for inheritance 

const one = {
    speak() {
        return `${this.name} speaks`
    }
}
const two = {
    walks() {
        return `${this.name} walks`
    }
}
function Person(name) {
    this.name = name
}
Object.assign(Person.prototype, one, two)
const person1 = new Person('Sudhanshu')
console.log(person1.speak())
console.log(person1.walks())

// Inheritance bsed on object.create()method

let obj = {
    name: 'Sahil',
    age: 19,
    prints() {
        return `my name is ${this.name}`
    }
}
let obj1 = Object.create(obj)
obj1.name = 'Shivam'
console.log(obj1.age)
console.log(obj1.prints())

// Inheritance with object.setPrototypeOf()

const one = {
    sound(){
        return `${this.name} barks`

    }
}
const two = {
    name: 'Dog'
}
Object.setPrototypeOf(one, two)
console.log(one.speak())