"use strict";

// display the multiplication table
let testMultiplyNumber = 5;
for (let i = 1; i <= 10; i++) {
  //console.log(`${testMultiplyNumber} x ${i} = ${testMultiplyNumber * i}`);
}

// Palindrome
let testPalindromeString = "Kasur nababan rusak";
let arrayString = testPalindromeString.split(""); // Turn string into array
let isPalindrome = true; // default check for palindrome
let lastChar = arrayString.length - 1; // Untuk mendapatkan character dari belakang

for (let i = 0; i < arrayString.length; i++) {
  if (arrayString[i].toLowerCase() === arrayString[lastChar].toLowerCase()) {
    // turn the value to lower case, so it can be compare
    isPalindrome = true;
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

// swap the case of each character from string

const swapTestString = "HelLLo WoRLD";
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

// FIND LARGEST NUMBER

let testingNumber01 = 25;
let testingNumber02 = 100;
let largestNumber = Math.max(testingNumber01, testingNumber02);
console.log(largestNumber);

// TYPE DATA CHECK

let inputTypeCheck = true;

if (typeof inputTypeCheck == "string") {
  console.log("1");
} else if (typeof inputTypeCheck == "number") {
  console.log("2");
} else {
  console.log("3");
}

// CHANGE EVERY LETTER a into *
let testStringChangeLetter = "farel";
let changeString = testStringChangeLetter.replace(/a/gi, "*");
console.log(changeString);
