// Roman Numeral Converter

/* Problem:
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

//My solution:

const romanNumeralsOne = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

const romanNumeralsTwo = {
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "XC",
};

const romanNumeralsThree = {
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM",
};

const romanNumeralsFour = {
  1: "M",
  2: "MM",
  3: "MMM",
};

function convertToRoman(num) {
  let roman = [];
  num = num.toString().split("");

  if (num.length == 1) {
    roman.push(romanNumeralsOne[num[0]]);
  } else if (num.length == 2) {
    roman.push(romanNumeralsTwo[num[0]]);
    roman.push(romanNumeralsOne[num[1]]);
  } else if (num.length == 3) {
    roman.push(romanNumeralsThree[num[0]]);
    roman.push(romanNumeralsTwo[num[1]]);
    roman.push(romanNumeralsOne[num[2]]);
  } else if (num.length == 4) {
    roman.push(romanNumeralsFour[num[0]]);
    roman.push(romanNumeralsThree[num[1]]);
    roman.push(romanNumeralsTwo[num[2]]);
    roman.push(romanNumeralsOne[num[3]]);
  }

  return roman.join("");
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solutions:

/* 1)

var convertToRoman = function (num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);

*/

//////////////////////////////////

/* 2)

function convertToRoman(num) {
  var romans = ["I", "V", "X", "L", "C", "D", "M"],
    ints = [],
    romanNumber = [],
    numeral = "",
    i;
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (i = 0; i < ints.length; i++) {
    units(ints[i]);
  }
  function units() {
    numeral = romans[i * 2];
    switch (ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[i * 2 + 1]));
        break;
      case 5:
        romanNumber.push(romans[i * 2 + 1]);
        break;
      case 6:
        romanNumber.push(romans[i * 2 + 1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(
          romans[i * 2 + 1].concat(numeral).concat(numeral).concat(numeral)
        );
        break;
      case 9:
        romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
    }
  }
  return romanNumber.reverse().join("").toString();
}

// test here
convertToRoman(97);

*/

//////////////////////////////////

/* 3)

function convertToRoman(num) {
  var romans = [
      // 10^i 10^i*5
      ["I", "V"], // 10^0
      ["X", "L"], // 10^1
      ["C", "D"], // 10^2
      ["M"], // 10^3
    ],
    digits = num
      .toString()
      .split("")
      .reverse()
      .map(function (item, index) {
        return parseInt(item);
      }),
    numeral = "";

  // Loop through each digit, starting with the ones place
  for (var i = 0; i < digits.length; i++) {
    // Make a Roman numeral that ignores 5-multiples and shortening rules
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    // Check for a Roman numeral 5-multiple version
    if (romans[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(
          romans[i][1] + romans[i][0].repeat(4),
          romans[i][0] + romans[i + 1][0]
        )
        // Shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }

  return numeral;
}

// test here
convertToRoman(36)

*/

//////////////////////////////////

/* 4)

function convertToRoman(num) {
  function getNumeral(digit, lowStr, midStr, nextStr) {
    switch (true) {
      case digit <= 3:
        return lowStr.repeat(digit);
      case digit === 4:
        return lowStr + midStr;
      case digit <= 8: // digits 5-8
        return midStr + lowStr.repeat(digit - 5);
      default:
        // digit 9
        return lowStr + nextStr;
    }
  }

  let str = "";

  // Thousands
  str += "M".repeat(Math.floor(num / 1000));
  num %= 1000;

  // Hundreds
  str += getNumeral(Math.floor(num / 100), "C", "D", "M");
  num %= 100;

  // Tens
  str += getNumeral(Math.floor(num / 10), "X", "L", "C");
  num %= 10;

  // Ones
  str += getNumeral(num, "I", "V", "X");

  return str;
}

convertToRoman(36);

*/
