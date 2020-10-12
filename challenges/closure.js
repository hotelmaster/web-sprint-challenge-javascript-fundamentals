// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction is able to reach outside of its scope for context, and in this case nestedFunction will reach out to myFunction and find
// the string stored in the variable internal.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

// calling this function will reset num to 0 and return a fresh summation function
// that add 1, 2, 3, ... all the way to the parameter, n.
function nextFunc() {
  // initilize n to 0 every time nextFunc is called
  let num = 0;
  // returns a reference to summation function
  return function summation(n) {
      // for-loop to sum up the values
      for (let i = 1; i <= n; i++) {
          num += i;
      }
      // display the sum
      console.log(num);
  };
}
// store the summation function reference in variable called sum
let sum = nextFunction();
// invoke the variable called sum and it will display the value
sum(4);