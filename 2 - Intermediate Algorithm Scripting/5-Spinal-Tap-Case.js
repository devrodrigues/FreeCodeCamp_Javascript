//Spinal Tap Case

/* Problem:
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

//My solution:

function spinalCase(str) {
  let upperCase = /[A-Z]/;

  str = str
    .replace(/[\s]|[_]/g, "-")
    .split("")
    .reduce((acc, str, index, arr) => {
      if (upperCase.test(str) && arr[index - 1] !== "-") {
        return (acc += "-" + str);
      } else {
        return (acc += str);
      }
    });

  return str.toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");

*/

//////////////////////////////////

/* 2)

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");

*/

//////////////////////////////////

/* 3)

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

*/
