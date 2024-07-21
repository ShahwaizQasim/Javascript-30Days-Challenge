
/* Activity 1: For Loop */

// task1
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// task2
for (let i = 1; i <= 10; i++) {
    // console.log(i * 5);
}


/* Activity 2: While Loop */

// task3 
let sum = 0;
let numbers = 1;
while (numbers <= 10) {
    sum += numbers; // 55
    numbers++;
}
// console.log(sum); 

// task4 
let i = 10;
while (i >= 1) {
    // console.log(i);
    i--;
}


/* Activity 3: do-while Loop */

// task5
let j = 1;
do {
    // console.log(j);
    j++;
} while (j <= 5);


// task6
let factorial = 1;
let ii = 1;
do {
    factorial *= ii; // factorial
    ii++;
} while (ii <= 5);
// console.log(factorial); // 120


/* Activity 4: Nested Loop */

// task7
for (let i = 0; i < 1; i++) {
    // console.log(i);
    for (let j = 0; j < 1; j++) {
        // console.log(i, j);
        for (let k = 0; k < 1; k++) {
            // console.log(i, j, k);
            for (let l = 0; l < 1; l++) {
                // console.log(i, j, k, l);
                for (let m = 0; m < 1; m++) {
                    // console.log(i, j, k, l , m);
                }
            }
        }
    }
}

// task7 Output
// 0
// 0 0
// 0 0 0;
// 0 0 0 0
// 0 0 0 0 0


/* Activity 5: Loop Control Statements */

// task8
for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        continue;
    }
    // console.log(index);
}

// task9
for (let index = 1; index <= 10; index++) {
    if (index === 8) {
        break;
    }
    console.log(index);
}