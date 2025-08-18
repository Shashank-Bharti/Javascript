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