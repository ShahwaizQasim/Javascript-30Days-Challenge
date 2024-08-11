/* Activity 1: Understanding Promises */

let promise = new Promise((resolve) => {
  resolve("This is the resolved message after 2 seconds");
});

promise
  .then((message) => {
    // console.log("message", message);
  })
  .catch((error) => {
    // console.log("error", error);
  });

let promise2 = new Promise((_, reject) => {
  reject("Promise error");
});

promise2
  .then((message) => {
    // console.log("message", message);
  })
  .catch((error) => {
    // console.log("error", error);
  });

/* Activity 2: Chaining Promises */

fetch("https://api.github.com/users/shahwaizqasim")
.then((response) => {
    // console.log("user data recieved",response);
    return response.json();
})
.then((data) => {
    // console.log('Users Data Recieved', data);
})
.catch(error => {
    // console.log('Error fetching data:', error);
})


/* Activity 3: Using Async/Await */

async function resultPromise(promise){
     try {
        const result  = await promise;
        // console.log("Promise Resolved with value:", result );
        
     } catch (error) {
        // console.log("Error", error);
     }
}
// resultPromise("ssssss");


async function rejectPromise() {
    try {
        const result = await Promise.reject('Error Message');
        // console.log('Promise resolved with value:', result);
        
    } catch (error) {
        // console.error('Promise rejected with error:', error);
        
    }
}
rejectPromise();


/* Activity 4: Fetch API */

// first method 
fetch('https://api.github.com/users/shahwaizqasim')
.then((response) => {
    console.log("Response", response);
    return response.json();
})
.then((data) => {
    console.log("Data", data);
})
.catch(error => {
    console.log("Error", error);    
})

// second method 
const form2 = async () => {
try {
    const API = await fetch('https://api.github.com/users/shehza-d');
    const res = await API.json();
    console.log('API', API);
    console.log('Result', res);
    
    
} catch (error) {
    console.log(error);
}
}
form2();
