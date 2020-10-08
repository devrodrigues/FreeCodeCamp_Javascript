// Sum All Primes

/* Problem:
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is 
not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

//My solution:

function makePrimes(num) {
  let controlArray = [];
  let primesArray = [];
  let i = 2;
  let last;
  let isPrime = true;

  while (i <= num) {
    controlArray.push(i);
    i++;
  }

  while (controlArray.length >= 1) {
    last = controlArray.pop();
    isPrime = true;
    for (let j = 0; j < controlArray.length; j++) {
      if (last % controlArray[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primesArray.push(last);
    }
  }
  return primesArray;
}

function sumPrimes(num) {
  let arr = [];

  if (num > 1) {
    arr = makePrimes(num);
  } else {
    return -1;
  }

  return arr.reduce((acc, n) => (acc += n));
}

console.log(sumPrimes(0));
console.log(sumPrimes(1));
console.log(sumPrimes(2));
console.log(sumPrimes(10));
console.log(sumPrimes(977));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);

*/

//////////////////////////////////

/* 2)

function sumPrimes(num) {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}
//test here
sumPrimes(10);

*/

//////////////////////////////////

/* 3)

function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number) {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        // return true if it is divisible by any number that is not itself.
        return false;
      }
    }
    // if it passes the for loops conditions it is a prime
    return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1) {
    return 0;
  }
  // Check if your number is not prime
  if (isPrime(num) === false) {
    // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if (isPrime(num) === true) {
    // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
sumPrimes(10);


*/

//////////////////////////////////

/* 4)

function sumPrimes(num) {
  let nums = Array.from({ length: num + 1 })
    .map((_, i) => i)
    .slice(2);
  for (let n in nums) {
    nums = nums.filter((val) => val == nums[n] || val % nums[n] != 0);
  }
  return nums.reduce((prevSum, cur) => prevSum + cur);
}
// test here
sumPrimes(13);

*/

//////////////////////////////////

/* 5)

function sumPrimes(num) {
  // step 1
  let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
  // step 2
  let onlyPrimes = arr.filter((n) => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  // step 3
  return onlyPrimes.reduce((a, b) => a + b);
}
// test here
sumPrimes(977);

*/
