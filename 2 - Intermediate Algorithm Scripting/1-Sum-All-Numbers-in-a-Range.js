//Sum All Numbers in a Range

/* Problem:
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum 
of all the numbers between them. The lowest number will not always come first.
*/

//My solution:

function sumAll(arr) {
  let [first, second] = arr;
  let newArray = [first];
  const diff = first - second;

  if (diff < 0) {
    for (let i = 0; i < Math.abs(diff); i++) {
      newArray.push(++first);
    }
    return newArray.reduce((acc, value) => (acc += value));
  } else {
    for (let i = 0; i < Math.abs(diff); i++) {
      newArray.push(--first);
    }
    return newArray.reduce((acc, number) => (acc = acc + number));
  }
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);

*/

//////////////////////////////////

/* 2)

const sumAll = (arr) => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};

*/

//////////////////////////////////

/* 3)

function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

*/

//////////////////////////////////

/* 4) Recursive Solution!

function sumAll([first, last]) {
  const step = first - last < 0 ? 1 : -1;
  return first !== last ? first + sumAll([first + step, last]) : first;
}

*/
