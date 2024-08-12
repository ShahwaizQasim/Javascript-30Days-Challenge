/* Activity 1: Basic Error Handing with try-catch */

function performCalculation(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Invalid input: Both arguments must be numbers.");
    }

    // Example of a calculation
    let result = a / b;

    if (b === 0) {
      throw new Error("Division by zero error.");
    }

    return result;
  } catch (error) {
    console.error("An error occurred: ", error.message);
    // Optionally rethrow the error or return a default value
    return null;
  }
}

// console.log(performCalculation(3,3));

function DivideNumbers(a, b) {
  try {
    const num = a / b;
    if (b === 0) {
      throw new Error("Zero is not allow");
    }
    return num;
  } catch (error) {
    console.log("New Error Message", error);
  }
}

console.log(DivideNumbers(2, 0));


/* Activity 2: Finally Block */