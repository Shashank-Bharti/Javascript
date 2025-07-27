// The For loop
/*for (initialization;condition;increment){
    code to executed;
}*/

var i;
for (i = 0;i<10;i++) {
    console.log(`iteration number:${i}`);
    
}

// The While loop
/*loop that executes based on given boolean expression
while(condition)
{
    loop statements
}

*/ 
let a = 9;

while (a >= 0) {
    console.log(`lap ${a}`);
    a--;
}

// Do-while loop
/*The do while loop is similar to the while loop, but it guarantees that the code inside the loop is executed at least once, even if the condition is false.
do{
    code to be executed
}while(condition);
*/ 
let x = 0;

do {
    console.log(x);
    x++;
} while (x < 10+1);

const name = "Shashank";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}