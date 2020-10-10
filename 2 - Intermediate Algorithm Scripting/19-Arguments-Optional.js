//Arguments Optional

/* Problem:
Create a function that sums two arguments together. If only one argument is provided, then 
return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

//My solution:

function addTogether(...params) {
  let notNumber;

  if (params.length > 1) {
    notNumber = params.find((elem) => typeof elem !== "number");

    if (!notNumber) {
      return params[0] + params[1];
    } else {
      return;
    }
  } else if (typeof params[0] !== "number") {
    return;
  }

  return function (b) {
    if (typeof params[0] !== "number" || typeof b !== "number") {
      return;
    } else {
      return params[0] + b;
    }
  };
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function (num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function (arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2, 3);

*/

//////////////////////////////////

/* 2)

function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = (second) =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? (second) => sum(second) : sum(second);
}
// test here
addTogether(2, 3);

*/

//////////////////////////////////

/* 3)

//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some((n) => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : (n) => (typeof n === "number" ? n + args[0] : undefined);
}

// test here
addTogether(2, 3);

*/
