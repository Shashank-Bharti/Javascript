//  Basic Comparison operators

console.log(5 > 3);  // Greater Than (>)
console.log(3 < 2);  // Less Than (<)
console.log(5 >= 6); // Greater Than or Equal (>=)
console.log(8 <= 8); // Less Than or Equal (<=)
console.log(8 == 4); // Is equals to (==)

// String Comparison

console.log("apple" > "banana");
console.log("glowing" > "glow");

// Type Coercion in Comparison

console.log("1" == 1); //true "1" is converted to string which may lead to error (==)<-- Loose equality
console.log("3" > 2);

// using strict equality (===)

console.log("1" === 1); //false

// null and undefined in comparison

console.log(null == undefined);  //true: loosely equal in value
console.log(null === undefined); //false: null is an object and undefined is a type itself

// null in matheamatical comparison
console.log(null > 1);
console.log(null == 0);
console.log(null < 1);
console.log(null >= 0);



