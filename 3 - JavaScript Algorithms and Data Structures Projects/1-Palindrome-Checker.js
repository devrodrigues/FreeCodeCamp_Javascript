// Palindrome Checker

/* Problem:
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring 
punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and 
turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

//My solution:

function palindrome(str) {
  const alphanumeric = /[a-z0-9]/;
  let strReverse = [];

  str = str
    .toLowerCase()
    .split("")
    .filter((s) => alphanumeric.test(s));

  strReverse = [...str];
  strReverse = strReverse.reverse();

  return JSON.stringify(str) === JSON.stringify(strReverse);
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /- :) 0-0"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("five|_/|four"));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}


*/

//////////////////////////////////

/* 2)

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}

*/

//////////////////////////////////

/* 3)

//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;
}

*/
