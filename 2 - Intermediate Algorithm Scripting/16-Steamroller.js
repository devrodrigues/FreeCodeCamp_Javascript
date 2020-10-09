// Steamroller

/* Problem:
Flatten a nested array. You must account for varying levels of nesting.
*/

//My solution:

function steamrollArray(arr) {
  const number = /[0-9]/;

  return (arr = arr
    .toString()
    .split(",")
    .map((s) => {
      if (number.test(s)) {
        return s - 0;
      } else if (s === "[object Object]") {
        return (s = {});
      } else {
        return s;
      }
    })
    .filter((s) => s !== ""));
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function (arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);

*/

//////////////////////////////////

/* 2)

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

*/

//////////////////////////////////

/* 3)

function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function (v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}

*/

//////////////////////////////////

/* 4)

function steamrollArray(val, flatArr = []) {
  val.forEach((item) => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

*/

//////////////////////////////////

/* 5)

function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}

*/
