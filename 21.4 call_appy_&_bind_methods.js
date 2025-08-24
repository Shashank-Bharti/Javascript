

// bind() method
/* creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.*/

const user1 = {
    name : "Shashank",
    age: 90,

    // sayHi(){                                |
    //                                         | //Implicit Binding
        //     console.log(this.name);         |
                                               
        // }
}

const user2 = {
    name : "Sudhanshu",
    age: 90,
    // sayHi(){
        //     console.log(this.name);
        
        // }
    }

const user3 = {
    name : "Priyanshu",
    age: 90,
    // sayHi(){
        //     console.log(this.name);
        
        // }
    }
    
    // user1.sayHi()
    
    function sayHi(degree,year){
        console.log(this.name,year,degree);
    }
    
    // user1.sayHi() // Error not a function since fn is outside the obj scope
    
    // Function borrowing

    // call()                                                         __
    //                                                                  |
     sayHi.call(user1,"Bsc CSDA",2027); //val of this -> user1          |
     sayHi.call(user2,"Bsc CSDA",2027); //val of this -> user2          |
//                                                                      |  Explicit binding
    // Apply()                                                          |
//                                                                      |
    sayHi.apply(user1,["BSc CSDA", 2027]) //takes params in arrays      |

    // Bind()

    const res = sayHi.bind(user3,"BSc CSDA")
    res(2027)

