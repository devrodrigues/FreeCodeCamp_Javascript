// Drop it

/* Problem:
Given the array arr, iterate through and remove each element starting from the first 
element (the 0 index) until the function func returns true when the iterated element is 
passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should 
be returned as an empty array.
*/

//My solution:

function dropElements(arr, func) {
  let controlArray = [...arr];
  let initialNumber;
  let index;

  arr = arr.filter(func);
  initialNumber = arr[0];
  index = controlArray.indexOf(initialNumber);

  index !== -1
    ? (controlArray = controlArray.slice(index))
    : (controlArray = []);

  return controlArray;
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);

console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
);

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
);

console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

*/

//////////////////////////////////

/* 2)

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

*/

//////////////////////////////////

/* 3)

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

*/

//////////////////////////////////

/* 4)

function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? dropElements(arr.slice(i + 1), func, i)
    : arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

*/
