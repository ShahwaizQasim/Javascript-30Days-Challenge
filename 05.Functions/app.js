
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
// console.log(findMax(20,10));

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
// console.log( containsCharacter("hello","e"));


/* Activity 4 : Function Perameters And Default Values */

// task7
const functionParameter = (para1, para2 = 2) => {
     return para1 * para2;
}
// console.log(functionParameter(5, 5)); // 25
// console.log(functionParameter(5)); // 10

// task8
const greet = (name, age = 10) => {
    return `Hello ${name} your age is ${age}`;
}  
// console.log(greet("shahwaiz",21));
// console.log(greet("shahwaiz"));


/* Activity 5 : Higher-Order Functions  */

// task9
const RepeatFunction = (UserMessage, times) => {
     for (let i = 0; i < times; i++) {
        console.log(UserMessage);
     }
     return UserMessage;
}

// console.log(RepeatFunction("Hello Shahwaiz", 5));


// // task10
// function applyFunctions(fn1, fn2, value) {
//     const firstResult = fn1(value);
//     const finalResult = fn2(firstResult);
//     return finalResult;
// }

// // Example usage:

// // Define two simple functions
// function double(x) {
//     return x * 2;
// }
// // console.log('double', double());
// function square(x) {
//     return x * x;
// }

// // Apply double first, then square the result
// const result = applyFunctions(double, square, 3);
// console.log(result);  // Output: 36






