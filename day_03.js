"use strict";

// display the multiplication table
let testMultiplyNumber = 5;
for (let i = 1; i <= 10; i++) {
  //console.log(`${testMultiplyNumber} x ${i} = ${testMultiplyNumber * i}`);
}

// Palindrome
let testPalindromeString = "madam";
let arrayString = testPalindromeString.split(""); // Turn string into array
let isPalindrome = true; // default check for palindrome
let lastChar = arrayString.length - 1; // Untuk mendapatkan character dari belakang

for (let i = 0; i < arrayString.length; i++) {
  if (arrayString[i].toLowerCase() === arrayString[lastChar].toLowerCase()) {
    // turn the value to lower case, so it can be compare
  } else {
    isPalindrome = false;
    //console.log(arrayString[i], arrayString[lastChar]);
    break;
  }
  lastChar--; //End of loop, will reduce the last char value
}

if (isPalindrome) {
  console.log(`${testPalindromeString} is a palindrome.`);
} else {
  console.log(`${testPalindromeString} is not a palindrome.`);
}

// PALINDROME SOLUTION KAK BAGAS
let targetStr = "madam"; // Dengan String kita bisa mengambil index <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let isPalindrome_2 = true;
let startChar = 0;
let endChar = targetStr.length - 1;

while (startChar < endChar) {
  if (targetStr[startChar] !== targetStr[endChar]) {
    isPalindrome_2 = false;
    break;
  } else {
    startChar++;
    endChar--;
  }
}

console.log(isPalindrome ? "palindrome" : "not palindrome");
//convert centimeter to kilometer.

let centimeterValue = 10000;
let meter = centimeterValue / 100;

console.log(meter, "Meter");

// format number as currency (IDR)
let inputNumber = 10000000000;
let arrayInputNumber = inputNumber.toString().split(""); // Turn string into array
let formatedNumber = []; // Array for formated number
let arrayCounter = 1;

for (let i = arrayInputNumber.length - 1; i >= 0; i--) {
  if (arrayCounter % 3 === 0) {
    console.log(arrayCounter);
    formatedNumber.unshift(arrayInputNumber[i]);
    formatedNumber.unshift(".");
  } else {
    formatedNumber.unshift(arrayInputNumber[i]);
  }
  arrayCounter++;
}

// IF to remove the '.' from the result Ex : inputNumber : 100000
if (arrayInputNumber.length % 3 == 0) {
  formatedNumber.shift();
}

console.log(`farel : Rp. ${formatedNumber.join("")},00`);

// Remove the first occurrence of a given “search string” from a string
let testingString = "hello World";
let searchString = "ell";
let formatedString = testingString.replace(searchString, "");

console.log(formatedString);

//capitalize the first letter
let testingStringCapitalized = "hello world t test test ra";
let stringCapitalizedArray = testingStringCapitalized.split(" ");

for (let i = 0; i < stringCapitalizedArray.length; i++) {
  stringCapitalizedArray[i] = stringCapitalizedArray[i].replace(
    stringCapitalizedArray[i][0],
    stringCapitalizedArray[i][0].toUpperCase()
  );
}

console.log(stringCapitalizedArray.join(" "));

// SOLUTION KAK BAGAS --> CAPITALIZE THE FIRST LETTER
let targetCapitalize = "hello world";
let resultCapitalize = "";

for (let i = 0; i < targetCapitalize.length; i++) {
  console.log(i - 1, targetCapitalize[i - 1]);
  console.log(i, targetCapitalize[i]);

  if (i === 0 || targetCapitalize[i - 1] === " ") {
    // check the previous character using i - 1, apakah terdapat spasi atau tidak. kalau ada makan char pada index akan diubah jadi uppercase
    resultCapitalize += targetCapitalize[i].toUpperCase();
  } else {
    resultCapitalize += targetCapitalize[i];
  }
}

// swap the case of each character from string

const swapTestString = "HELLO world";
const swapTestStringArray = swapTestString.split("");

// Looping inside string array, and do comparison whether the string of the current index is have uppercase. If yes, make the value to lowercase if not make it to uppercase
for (let i = 0; i < swapTestStringArray.length; i++) {
  if (swapTestStringArray[i] == swapTestStringArray[i].toUpperCase()) {
    swapTestStringArray[i] = swapTestStringArray[i].toLowerCase();
  } else {
    swapTestStringArray[i] = swapTestStringArray[i].toUpperCase();
  }
}
console.log(swapTestStringArray.join(""));

// SOLUTION KAK BAGAS : SWAP THE CASE OF EACH CHARACTER FROM STRING
let targetConvert = "HELLO world";
let resultConvert = "";

for (let i = 0; i < targetConvert.length; i++) {
  if (targetConvert[i] >= "a" && targetConvert[i] <= "z") {
    // SETIAP LETTER ITU MEMILIKI NILAI ATAU BOBOT --> ASCII
    resultConvert += targetConvert[i].toUpperCase();
  } else if (targetConvert[i] >= "A" && targetConvert[i] <= "Z") {
    resultConvert += targetConvert[i].toLowerCase();
  } else {
    resultConvert += targetConvert[i];
  }
}
console.log(resultConvert);

// Find Largest Number

let testingNumber01 = 25;
let testingNumber02 = 100;
let largestNumber = Math.max(testingNumber01, testingNumber02);
console.log(largestNumber);

// Type Data Check

let inputTypeCheck = true;

if (typeof inputTypeCheck == "string") {
  console.log("1");
} else if (typeof inputTypeCheck == "number") {
  console.log("2");
} else {
  console.log("3");
}

// Change every letter a into *
let testStringChangeLetter = "farel";
let changeString = testStringChangeLetter.replace(/a/gi, "*");
console.log(changeString);

console.log("B" > "A");
