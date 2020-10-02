//Seek and Destroy

/* Problem:
You will be provided with an initial array (the first argument in the 
destroyer function), followed by one or more arguments. Remove all elements from the initial 
array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

//My solution:

function destroyer(arr, ...params) {
  return arr.filter((elem) => params.includes(elem) === false);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
  )
);

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

*/

//////////////////////////////////

/* 2)

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !args.includes(val);
  });
}

*/

//////////////////////////////////

/* 3)

const destroyer = (arr, ...valsToRemove) =>
  arr.filter((elem) => !valsToRemove.includes(elem));

*/
