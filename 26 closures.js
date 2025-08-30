/* A closure is a combination of function bundled together with reference to its lexical Environment*/

/*In other Words, Aclosure is a function that remembers its outer variables and can access them */

function x(){
    let a = 3;
    function y(){
        // let b = 7
        console.log(a);
        // function z(){
        //     console.log(b);
        // }
        // z()
    }
    return y
}

let z = x() 
z()

function a(){
    var v = 2
    function b(){
        console.log(v);
        var v;
        // var v = 10;
    }
    return b
}

let c = a()
c()

function Human(name){
    this.name = name
    this.sayName= function (){
        console.log(this.name);

    }

setTimeout(function (){

    console.log(this.name
        
    )}.bind(this),1000)
}
const n = new Human('Hooman')

n.sayName()