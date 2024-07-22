
/* Activity 1 : Function Decalaration */

// task1
function checkEvenOrOdd(num){
   if (num % 2 === 0) {
      console.log(`${num} Even Number`); 
   }else{
    console.log(`${num} Odd Number`);
   }
   return num;
}
// console.log(checkEvenOrOdd(2)); // even number
// console.log(checkEvenOrOdd(5)); // odd number

// task2
function squareValue (square){
    return square ** 2;
}
// console.log(squareValue(9));


/* Activity 2 : Function Expression */

// task3
const findMax = function(a,b){ // method 1
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
    return max;
}
// console.log(findMax(5,10));

const findMaxNum = function(a, b){
    if (a > b) {
        console.log(`The maximum number is ${a}`);
        return a;
    }else{
        console.log(`The maximum number is ${b}`);
        return b;
    }
}
// console.log(findMaxNum(9,3));


// task4
const concatNum = function(){
    let a = "hello";
    let b = a.concat(" World")
    return b;
} 
// console.log(concatNum());


/* Activity 3 : Arrow Functions */

// task5
const sumNum = (a , b) => {
   return a + b;
}
// console.log(sumNum(5,9));

// task6
const containsCharacter = (a, b) => {
    return a.includes(b);
}
console.log( containsCharacter("hello","e"));


/* Activity 4 : Function Perameters And Default Values */




