
/* Activity 1: Creating and Exporting Modules */

const addNum = (a,b) => {
    const numAdd = a + b;
    return numAdd;
}

const StudentInf = {
    name: "Shahwaiz",
    age:20,
    Institute: "SMIT",
}

const {name, age, Institute } = StudentInf;
// console.log(name,age);

export{addNum, StudentInf}


