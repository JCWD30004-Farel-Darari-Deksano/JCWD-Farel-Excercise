// Triangle Pattern
function trianglePattern(height) {
  // 1. Define variable for the row
  // 2. Create for loop, where the i start from 0 and the limit of the loop is end of the row
  // 3. Inside the loop, create variable for char that will be print
  // 4. Inside the loop create another loop for print the number
  // 5. the inner loop, it will start j from 1 and the limit of the loop is i
  // 6. display the char
  // 7. increment the char
  // 8. in the ouside loop, add new line

  let row = height;
  let result = "";
  let printNumber = 1;
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      if (printNumber > 0 && printNumber < 10) {
        result += 0 + printNumber.toString() + " ";
      } else {
        result += printNumber.toString() + " ";
      }
      printNumber++;
    }
    result += "\n";
  }
  return result;
}

console.log(trianglePattern(5));

// KAK BAGAS SOLUTION FOR CREATE TRIANGLE
function createTriangleKakBagas(heigth) {
  let number = 1;
  for (let i = 1; i <= heigth; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += (number < 10 ? "0" : "") + number + " ";
      number++;
    }
    console.log(row.trim());
  }
}
createTriangleKakBagas(5);

// -----------------------

function findFizzBuzz(number) {
  // 1. create a loop sebanya number (argument)
  // 2. Didalama loop kita check apakah number itu bisa dibagi 3 dan 5
  // 3. Jika iya kita akan mencetak FizzBuzz
  // 4. Didalam loop lagi, kita cek apakah number itu hanya bisa dibagi 3 --> maka akan mencetak Fizz
  // 5. Didalam loop lagi, kita cek apakah number itu hanya bisa dibagi 5 --> maka akan mencetak Buzz
  // 6. lainnya akan hanya mempush number itu

  let stringResult = "";

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("check");
      stringResult += "FizzBuzz ";
    } else if (i % 3 === 0) {
      stringResult += "Fizz ";
    } else if (i % 5 === 0) {
      stringResult += "Buzz ";
    } else {
      stringResult += i.toString() + " ";
    }
  }
  return stringResult;
}

console.log(findFizzBuzz(30));

function bmiCalc(weigth, heigth) {
  // 1. Create Variable to store BMI  ->
  // 2. Create variable to Store weight inn KG
  // 3. Create variable to Store heigth in Meter (input is in CM So we need to convert it)
  // 3. Create condition for each requrement and return that

  const calcBmi = weigth / (heigth * heigth);

  if (calcBmi >= 18.5 && calcBmi <= 24.9) {
    return `${calcBmi} : Ideal`;
  } else if (calcBmi >= 25 && calcBmi <= 29.9) {
    return `${calcBmi} : Overweigth`;
  } else if (calcBmi >= 30 && calcBmi <= 39.9) {
    return `${calcBmi} : Very Overweigth`;
  } else if (calcBmi > 39.9) {
    return `${calcBmi} : Obesity`;
  } else {
    return `${calcBmi} : Less Weigth`;
  }
}
console.log(bmiCalc(70, 1.75));

function arrayOddNumber(number) {
  // 1. create an empty array to hold the number
  // 2. create a loop , dan setiap loopnya akan cek apakah number itu odd atau tidak.

  const arrayNumber = [];

  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      arrayNumber.push(i);
    } else {
      continue;
    }
  }
  return arrayNumber;
}

console.log(arrayOddNumber(10));

function arrayOddNumber2(arrayNumber) {
  const result = [];

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 == 0) {
      console.log(result.length);
      result[result.length] = arrayNumber[i];
    } else {
      continue;
    }
  }
  return result;
}

let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayOddNumber2(arrayNumber));

function splitWord(word) {
  return word.split(" ");
}

console.log(splitWord("Farel Deksano"));

// KAK BAGAS SOLUTON SPLIT WORD
function splitWord2(word) {
  let result = [];

  let tempWord = "";

  console.log(result.length);

  for (let i = 0; i <= word.length; i++) {
    if (word[i] === " " || i === word.length) {
      console.log(result.length);
      result[result.length] = tempWord;
      tempWord = "";
    } else {
      tempWord += word[i];
    }
  }
  return result;
}

console.log(splitWord2("Farel Deksano"));
