//Pig Latin

/* Problem:
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

//My solution:

function startsConsonant(str, consonant) {
  const s = str.match(consonant);
  return (str = str.split("").splice(s[0].length).concat(s).join("") + "ay");
}

function translatePigLatin(str) {
  const consonant = /^[b-df-hj-np-tv-z]+/gi;

  if (consonant.test(str)) {
    return startsConsonant(str, consonant);
  } else {
    return str + "way";
  }
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

*/

//////////////////////////////////

/* 2)

function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");

*/

//////////////////////////////////

/* 3)

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");


*/

//////////////////////////////////

// 4)

//function translatePigLatin(str) {
//  return str
//    .replace(/^[aeiou]\w*/, "$&way")
//    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
//}
//
//// test here
//translatePigLatin("consonant");

//////////////////////////////////

/* 5)

function translatePigLatin(str, charPos = 0) {
  return ["a", "e", "i", "o", "u"].includes(str[0])
    ? str + (charPos === 0 ? "way" : "ay")
    : charPos === str.length
    ? str + "ay"
    : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

*/
