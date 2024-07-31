/* Activity 1: Array Creation and Access */

// task1
const arrNum = [1, 2, 3, 4, 5];
for (let i = 0; i < arrNum.length; i++) {
  // console.log(arrNum[i]);
}

// task2
const arr2 = [1, 3, 4, 5, 7, 9];
// console.log(arr2[0], arr2[5]); // first and last element print

/* Activity 2: Array Methods (Basic) */

const arr3 = [2, 4, 6, 8];

// task3
arr3.push("ali"); //last me String add in array

// task4
arr3.pop(); //last se remove add in array

// task5
arr3.unshift("Qasim"); //start se add in array

// task6
arr3.shift("Qasim"); //start se remove in array

// console.log(arr3);

/* Activity 3: Array Methods (Intermediate) */

// task7
const arrMap = [2, 4, 5, 7, 9, 8];

arrMap.map((arr) => {
  //   console.log(arr * arr);
});

// task8
const filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EvenNumbers = filterArr.filter((num1) => {
  return num1 % 2 === 0;
});

// console.log('Even Number', EvenNumbers);

// task9
const ReduceArr = [1, 2, 3, 4, 5];

const ArrNumberPlus = ReduceArr.reduce((numbers, sum) => {
  return numbers + sum;
});
// console.log('ArrayReduce', ArrNumberPlus);

/* Activity 4: Array Iteration */

// task10
const arrIteration = [3, 4, 5, 66, 77];
for (let index = 0; index < arrIteration.length; index++) {
  const element = arrIteration[index];
//   console.log(element);
}

// task11
arrIteration.forEach((items) => {
//   console.log(items);
});

/* Activity 5: Multi-Dimensional Array */

const twoD_Array = [
  [1, 2, 3, 4],
  [5, 6, 7, 9, 10],
  [5, 2, 9],
];

const result = [[],[],[]]

for (let i = 0; i < twoD_Array.length; i++) {
    // console.log(twoD_Array[i]);
    for (let j = 0; j < twoD_Array[i].length; j++) {
        const sum = twoD_Array[i][j]; // twoD_Array values print
        result[i].push(sum);
    }
}
console.log(JSON.stringify(result));
