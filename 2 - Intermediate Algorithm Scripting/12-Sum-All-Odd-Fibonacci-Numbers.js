// Sum All Odd Fibonacci Numbers

/* Problem:
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than 
or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number 
in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or 
equal to 10 are 1, 1, 3, and 5.
*/

//My solution:

function makeFib(num) {
  let arr = [1, 1];
  let i = 0;
  let sum = arr[i] + arr[i + 1];

  while (sum <= num) {
    arr.push(sum);
    i++;
    sum = arr[i] + arr[i + 1];
  }

  return arr;
}

function sumFibs(num) {
  let fib = [];
  fib = makeFib(num);

  return fib.filter((n) => n % 2 === 1).reduce((acc, n) => (acc = acc + n));
}

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

*/

//////////////////////////////////

/* 2)

function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);

*/
