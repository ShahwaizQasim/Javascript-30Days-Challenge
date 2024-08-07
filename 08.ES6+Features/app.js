/* Activity 1: Template Literals */

let myName = "Shahwaiz";
let myAge = 21;

// console.log(`My Name Is ${myName} and my age is ${myAge}`);

/* Activity 2: Destructuring */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second] = numbers;
// console.log(first);
// console.log(second);

const myBook = {
  name: "Shahwaiz",
  age: 20,
  Institute: "SMIT",
};

const { age, Institute } = myBook;
// console.log(age, Institute);

const { age: myAge1, Institute: myIns } = myBook;
// console.log(myAge1, myIns);

/* Activity 3: Spread and Rest Operators*/

const names = ["anas", "abid", "akhter", "ali", "ahsan"];
// console.log(...names);

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

// console.log(sum(2,4,5)); // 11
// console.log(sum(22,21,2,5)); //50



/* Activity 4: Default Perameters */

function MyPerameters(a, b = 2) {
  return a + b;
}
// console.log(MyPerameters(2)); // 4
// console.log(MyPerameters(2,6)); // 8


/* Activity 5: Enhanced Object Literals */

const mName = "shahwaiz";
const ages = 22;

const studentInf = {
    mName,
    ages,
    greet(){
      console.log(`My name is ${this.mName} and my age is ${ages}`);  
    },
}

console.log(studentInf); // obj print
console.log(studentInf.greet()); // 




