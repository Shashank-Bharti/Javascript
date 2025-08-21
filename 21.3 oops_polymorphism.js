// Polymorphism  - poly - many , morphism - transformations
// means the same function with different signatures is called many times. 
// It allows methods to do different things based on the object it is acting upon

// Method Overriding using 'extends'

/*a child class overrides its parent*/

class Vehicle{
     moves(){
        console.log('can move on surface,air,water and outerspace');
     }
}

class Car extends Vehicle {
    moves(){
        console.log('can move on surface');
        
    }
}

class Airplane extends Vehicle {
    moves(){
        console.log('can move in air');
        
    }
}

class Boat extends Vehicle {
    moves(){
        console.log('can move on water');
        
    }
}

const boat = new Boat()
const plane = new Airplane()
boat.moves()
plane.moves()

// Method Overloading (Compile-time Polymorphism)
class Calculator {
    add(a, b) {
        if (b === undefined) {
            return a + a; 
        }
        return a + b; 
    }
}

const calc = new Calculator();
console.log(calc.add(2)); 
console.log(calc.add(2, 3));

