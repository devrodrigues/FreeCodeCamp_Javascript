// Smallest Common Multiple

/* Problem:
Find the smallest common multiple of the provided parameters that can be evenly divided by 
both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

//My (FREAK) solution:

function makeArray(arr) {
  let newArray = [];

  if (arr[0] > arr[1]) {
    arr.reverse();
  }

  return (newArray = newArray = Array.from({ length: arr[1] + 1 })
    .map((_, i) => i)
    .slice(2));
}

function maxNumberArray(arr) {
  arr = arr.sort((a, b) => (a < b ? 1 : -1));
  return arr[0];
}

function addArrayPrimes(current, n) {
  let newArray = new Array(n);
  return newArray.fill(current);
}

function makePrimes(min, arr) {
  let controlArray = [...arr];
  let primesNumbers = [];
  let currentDivider;
  let divisionsArray = [];
  let nDivisions = 0;
  let maxDivisions = 0;

  if (controlArray[0] < min) {
    min = arr.indexOf(min);
    arr = arr.slice(16);
  }

  for (let i = 0; i < controlArray.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      while (arr[j] % controlArray[i] === 0 && arr[j] !== 1) {
        arr[j] = arr[j] / controlArray[i];
        nDivisions++;
      }
      divisionsArray.push(nDivisions);
      nDivisions = 0;
    }
    currentDivider = controlArray[i];
    maxDivisions = maxNumberArray(divisionsArray);

    primesNumbers = primesNumbers.concat(
      addArrayPrimes(currentDivider, maxDivisions)
    );
    divisionsArray = [];
  }

  return primesNumbers;
}

function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);

  arr = makeArray(arr);
  arr = makePrimes(min, arr);
  return arr.reduce((acc, num) => (acc *= num));
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function (a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1, 5]);

*/

//////////////////////////////////

/* 2)

function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}

// test here
smallestCommons([1, 5]);

*/

//////////////////////////////////

/* 3)

function smallestCommons(arr) {
  // Euclidean algorithm for the greatest common divisor.
  // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // range
  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}

// test here
smallestCommons([1, 5]);

*/

//////////////////////////////////

/* 4)

const smallestCommons = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

// test here
smallestCommons([1, 5]);

*/

//////////////////////////////////

/* 5)

const smallestCommons = (arr) => {
  let primeFactors = {};
  for (let i = Math.max(Math.min(...arr), 2); i <= Math.max(...arr); i++) {
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j];
      }
    }
  }
  let result = 1;
  for (let i in primeFactors) {
    result *= i ** primeFactors[i];
  }
  return result;
};

const getPrimeFactors = (num) => {
  const primes = {};
  for (let factor = 2; factor <= num; factor++) {
    while (num % factor === 0) {
      primes[factor] = primes[factor] ? primes[factor] + 1 : 1;
      num /= factor;
    }
  }
  return primes;
};
smallestCommons([1, 5]);

*/
