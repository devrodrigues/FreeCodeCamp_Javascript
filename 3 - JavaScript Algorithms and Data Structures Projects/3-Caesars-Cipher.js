// Caesars Cipher

/* Problem: 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a 
shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted 
by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.
*/

//My solution:

const lettersROT13 = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot13(str) {
  const isLetter = /[A-Z]/;
  let decodedString = str.split("");

  return decodedString
    .map((s) => {
      if (isLetter.test(s)) {
        return (s = lettersROT13[s]);
      } else {
        return s;
      }
    })
    .join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function rot13(str) {
  // Split str into a character array
  return (
    str
      .split("")
      // Iterate over each character in the array
      .map.call(str, function (char) {
        // Convert char to a character code
        var x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoin the array into a string
}

*/

//////////////////////////////////

/* 2)

// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");

*/

//////////////////////////////////

/* 3)

function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, (L) =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

*/

//////////////////////////////////

/* 4)

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((char) => {
      const pos = alphabet.indexOf(char);
      return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
    })
    .join("");
}

*/

//////////////////////////////////

/* 5)

function rot13(str) {
  str.toUpperCase(); // Convert `str` string to uppercase letters
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arr = str.split(""); // Splits `str` into an array where each element is an individual character (including non-alphabetic characters)

  for (var i = 0; i < arr.length; i++) {
    // Iterate number of `arr` elements
    for (var j = 0; j < abc.length; j++) {
      // Iterate number of `abc`/`nop` array elements
      if (arr[i] === abc[j]) {
        arr[i] = nop[j]; // Swap the `arr` character for the corresponding `nop` array character
      } else if (arr[i] === nop[j]) {
        arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
      }
    }
  }

  return arr.join(""); // Join all `arr` array characters back into a string, returning the deciphered `str` with all non-alphabetical characters preserved
}

*/
