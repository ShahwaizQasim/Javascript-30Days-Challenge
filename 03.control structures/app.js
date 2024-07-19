
/* Activity 1 => if/else statements */

// task1
let number = -2;

if (number >= 0) {
    // console.log('Number is positive');    
}else{
    // console.log('Number is Negative');
}

// task2
// let UserValue = prompt("Enter your age");
// if (UserValue >= 18) {
//     console.log('you can vote');
// } else{
//     console.log('you can not vote because your age is under eighteen');
// }


/* Activity 2 => Nested if/else statements */

// task 3
let num1 = 10;
let num2 = 30;
let num3 = 20;
let largest;

if (num2 >= num1) {
    if (num3 >= num1) {
        largest = num1; 
        console.log(largest);
        // console.log('nested if chala');
    }else{
        largest = num3;
        // console.log(largest);
    }
}else{
    if (num2 >= num3) {
        largest = num2;
        // console.log(largest);
    }
    else{
        largest = num3;
        // console.log(largest);
    }
    // console.log('else chala');
}


/* Activity 3 => Switch Case statements */

// task 4
// let userInp = Number(prompt("Enter your date"));
// if (!Number(userInp)) {
//     console.log("string not allow");
// }else{
// switch (userInp) {
//     case 1:
//     console.log('Monday');    
//     break;

//     case 2:
//     console.log('Tuesday');    
//     break;

//     case 3:
//     console.log('Wednesday');    
//     break;

//     case 4:
//     console.log('Thursday');    
//     break;

//     case 5:
//     console.log('Friday');    
//     break;

//     case 6:
//     console.log('Saturday');    
//     break;

//     case 7:
//     console.log('Sunday');    
//     break;

//     default:
//     break;
// }
// }


/* Activity 4 => Conditional Ternory Operator */

let num5 = 11;
let result = (num5 % 2 === 0) ? `${num5} is even number` : `${num5} is odd number` ;
console.log(result);