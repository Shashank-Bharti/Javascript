// Classes = Blueprint of Objects - to create bojects having similar properties or behaviour
// Objects = Instance of a class , inherits property from classes

// Constructor() method
/*The constructor method is a special method it is automatically executed when a new object is created from a class. Its primary purpose is to initialize object properties, allowing you to define the initial state of an object during its instantiation.*/



 class Dog {                //defines class

    static sound = "bark"   //class property
    
    constructor(name,breed){      
    this.name = name       //instance property
    this.breed = breed
    }
 

    //  Defining method

    bark(){
        console.log(`${this.name} says Woof!`);
        
    }
}

const myDog = new Dog("Inu" , "Shiba")
myDog.bark()


/* members inside the object which are the key: values are called Object properties. For example, in the above code, name is an object property (unique to each instance), and sound is a class property (shared by all instances of the class).*/


// Class Getters and Setters

class Cat{
    constructor (name){
        this.name = name 
    }
    // Getter
    get catName(){
        return this.name
    }
    // Setter
    set catName(newName){
        this.name = newName
    }

    // Normal method

    meow(){
        console.log(`${this.name} says Nyaa~~~`);
        
    }
}

let myCat = new Cat("Neko")
myCat.meow()

console.log(myCat.catName)   //Using getter

myCat.catName = "Chiru Chiru"

console.log(myCat.catName)

myCat.meow()

// Object

let dog1 = new Dog()

// access the class property

console.log(Dog.sound);
