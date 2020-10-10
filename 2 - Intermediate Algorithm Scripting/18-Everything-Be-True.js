// Everything Be True

/* Problem:
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will 
be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

//My solution:

function truthCheck(collection, pre) {
  return collection.every((obj) => obj.hasOwnProperty(pre) && obj[pre]);
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 },
    ],
    "age"
  )
);

console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastForward", onBoat: null },
    ],
    "onBoat"
  )
);

console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastForward", onBoat: true },
    ],
    "onBoat"
  )
);

console.log(truthCheck([{ single: "yes" }], "single"));

console.log(truthCheck([{ single: "" }, { single: "double" }], "single"));

console.log(
  truthCheck([{ single: "double" }, { single: undefined }], "single")
);

console.log(truthCheck([{ single: "double" }, { single: NaN }], "single"));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

*/

//////////////////////////////////

/* 2)

function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

*/

//////////////////////////////////

/* 3)

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every((obj) => obj[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

*/
