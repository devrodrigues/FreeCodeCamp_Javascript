// Missing letters

/* Problem: 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined
*/

//My solution:

function fearNotLetter(str) {
  const [first, last] = [str[0], str[str.length - 1]];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetSlice = alphabet.slice(
    alphabet.indexOf(first),
    alphabet.indexOf(last) + 1
  );

  if (alphabetSlice.length === str.length) {
    return;
  } else {
    return alphabetSlice.split("").find((elem) => !str.includes(elem));
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    //code of current character
    var code = str.charCodeAt(i);

    //if code of current character is not equal to first character + no of iteration
    //hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {
      //if current character has escaped one character find previous char and return
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

*/

//////////////////////////////////

/* 2)

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function (letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");

*/

//////////////////////////////////

/* 3)

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

*/
