
/* Activity 1: Understanding Promises */

let promise = new Promise((resolve) => {
        resolve("This is the resolved message after 2 seconds");
})

promise.then((message) => {
    console.log("message", message);
})
.catch((error) => {
    console.log("error", error);
})



let promise2 = new Promise((_,reject) => {
    setTimeout(() => {
        reject("Promise error");
    },2000)
})

promise2.then((message) => {
    console.log("message", message);
})
.catch((error) => {
    console.log("error", error);
})


/* Activity 2: Chaining Promises */


