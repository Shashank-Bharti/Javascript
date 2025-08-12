//  tostring method
let arr = ['Hello','I','am','a','string']
console.log(arr.toString());

// Join method
console.log(arr.join(' '));

// delete operator method
s = delete arr[4]
console.log(arr);

// flat method
/* reduces nesting */
let a = [['1', '2'], ['3', '4', '5',['6'], '7']];
let n = a.flat(Infinity)
console.log(n);

// unshift method
/*adds elements to front */
const a1 = [20,30,50]
a1.unshift(0,10)
console.log(a1);

// shift method
/*removes elements from front */
const a2 = [10,20,30,50]
a2.shift()
console.log(a2);

// reverse method
a2.reverse()
console.log(a2);

// values method
let res = arr.values()

for (const value of res){
    console.log(value);
    
}

