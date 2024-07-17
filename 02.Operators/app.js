
/* Arithmetic Operations */

// Addition
let num1 = 2;
let num2 = 2;
// console.log(`Addition ${num1 + num2}`);

// Subtraction
let num3 = 2;
let num4 = 2;
// console.log(`Subtraction ${num3 - num4}`);

// Multipliation
let num5 = 2;
let num6 = 2;
// console.log(`Subtraction ${num5 * num6}`);

// Division
let num7 = 2;
let num8 = 2;
// console.log(`Division ${num7 / num8}`);

// Modulus
let num9 = 2;
let num10 = 2;
// console.log(`Modulus ${num7 % num8}`);


/* Assignment Operator */

// Addition 
let number = 5;
number += 4;
// console.log(`Plus ${number}`);  

// Subtraction 
let number2 = 5;
number2 -= 4;
// console.log(`Minus ${number2}`);  


/* Comparison Operator */

console.log(8 > 7); // true
console.log(7 < 5); // false

console.log(8 >= 8); // true
console.log(7 <= 8); // true

console.log('8' == 8); // false
console.log(8 === 8); // true


/* Logical Operator */

// dono condition true hogi tw condition true hogi
console.log(9 > 8 && 9 > 10); // false
console.log(7 < 8 && 10 >= 10); // true

// dono condition me se koi ak true hogi tw condition true ho jaegi
console.log(6 > 8 || 11 > 10); // true
console.log(6 > 8 || 9 > 10); // false

let a = 123;
console.log('Not', !a);


/* Ternory Operator */

// write a program that uses the ternory operator to check if a number is positive or negative and log the result to the console
let number1 = -1;
let result = (number1 >= 0) ? 'The number is positive': 'The number is negative';
console.log('result', result);