// Lowest, Highest , and average value
function getNumberValue(arrNumber) {
  const resultNumber = {
    lowestNumber: arrNumber[0],
    highestNumber: arrNumber[0],
    averageNumber: 0,
  };

  // Get Lowest Number
  // 1. Looping into array
  // 2. compare value in variable lowest to value in array index.
  // 3. if value is greater than lowest variable, keep the value. if index value is less than the lowest variable value so replace it

  // Get Highest number
  // 1. we can use same looping for the lowerst
  // 2. same like lowerst number. Tapi kebalikannya

  for (let i = 0; i < arrNumber.length; i++) {
    // GET LOWEST NUMBER
    if (arrNumber[i] < resultNumber.lowestNumber) {
      resultNumber.lowestNumber = arrNumber[i];
    }

    // GET HIGHEST NUMBER
    if (arrNumber[i] > resultNumber.highestNumber) {
      resultNumber.highestNumber = arrNumber[i];
    }

    // GET AVERAGE NUMBER
    resultNumber.averageNumber += arrNumber[i] / arrNumber.length;
  }

  return resultNumber;
}

console.log(getNumberValue([12, 5, 23, 18, 4, 45, 32]));

// words in the array, separated by commas

function seperateWordWithComma(arrWord) {
  // 1. create variable to store the stringResult
  // 2. Looping inside array
  // 3. Check if the array is in last index put "and" in the string
  // 4. if not, put ',' after the text

  let resultWord = "";

  for (let i = 0; i < arrWord.length; i++) {
    if (i == arrWord.length - 1) {
      resultWord += ` and ${arrWord[i]}`;
    } else {
      resultWord += `${arrWord[i]},`;
    }
  }
  return resultWord;
}

console.log(seperateWordWithComma(["apple", "banana", "cherry", "date"]));

//second smallest number
function findSecondSmallestNumber(arrNumber) {
  // 1. Sort the number from smallest to largest
  // 2 . get the second index of the smallest number

  const sortArray = arrNumber.sort((a, b) => a - b);
  return sortArray[1];
}

console.log(findSecondSmallestNumber([5, 3, 1, 7, 2, 6]));

function sumArray(array1, array2) {
  // 1. Create a new array to store the result
  // 2. Looping both array
  // 3. Add the value from both array to the new array
  // 4. Return the new array

  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    resultArray.push(array1[i] + array2[i]);
  }

  return resultArray;
}

console.log(sumArray([1, 2, 3], [3, 2, 1]));

function addNewArray(arrNumber, number) {
  if (arrNumber.indexOf(number) === -1) {
    // -1, karena index -1 itu tidak ada, maka ketiadaan itu digambarkan -1
    arrNumber.push(number);
  }
  return arrNumber;
}

console.log(addNewArray([1, 2, 3, 4], 56));

function sumNumberType(arrList) {
  // 1. Create new array to store the number only
  // 2. Create variabl to store the total sum
  // 3. looping inside arrayList
  // 4. Push to numberArrayList if the data type is number else is continue
  // 5. loop inside the array and sum all of the value other solution so it will be only one loop is while checking it also calculate the sum

  let totalSum = 0;

  for (let i = 0; i < arrList.length; i++) {
    if (typeof arrList[i] === "number") {
      totalSum += arrList[i];
    } else {
      continue;
    }
  }
  return totalSum;
}
console.log(sumNumberType(["3", 10, "string", null, false, undefined, 2]));

function createArray(maxSize, ...number) {
  // 1. Using method splice to get the array from index 0 to index 4

  return number.splice(0, maxSize);
}

const maxZise = 5;
console.log(createArray(1, 3, 2, 4, 1, 3, 1, 2));

function combineArray(array1, array2) {
  // CAN USE CONCAT METHOD
  return array1.concat(array2);
}

console.log(combineArray([1, 2, 3], [4, 5, 6]));

// CHECK DUPLICATE ARRAY

function checkDuplicateValue(array) {
  let compareValue;
  let isDuplicate;

  const duplicateValueArr = [];

  //   Looping inside array and get the value of the index and assign to compareValue variable to be the compare value in inner looping
  for (let i = 0; i < array.length; i++) {
    compareValue = array[i];

    // Looping again inside the array
    for (let j = 0; j < array.length; j++) {
      // Set default and reset to false for eacvh loop
      isDuplicate = false;
      if (i === j) {
        continue;
      } else {
        if (compareValue == array[j]) {
          if (duplicateValueArr.length === 0) {
            duplicateValueArr.push(compareValue);
          } else {
            // Check if the value already exist in the duplicateValueArr
            for (let q = 0; q < duplicateValueArr.length; q++) {
              if (compareValue === duplicateValueArr[q]) {
                isDuplicate = true;
                continue;
              }
            }
            // If not exist push value to array
            if (!isDuplicate) {
              duplicateValueArr.push(compareValue);
            }
          }
        }
      }
    }
  }
  return duplicateValueArr;
}
console.log(checkDuplicateValue([10, 20, 40, 20, 10, 50, 30, 10, 60, 10]));

function findDifference(array1, array2) {
  const combinedArray = array1.concat(array2);

  let compareValue;
  let isDuplicate;
  const differenceArrayList = [];

  for (let i = 0; i < combinedArray.length; i++) {
    compareValue = combinedArray[i];
    isDuplicate = false;

    for (let j = 0; j < combinedArray.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (compareValue == combinedArray[j]) {
          isDuplicate = true;
          break;
        }
      }
    }

    if (!isDuplicate) {
      differenceArrayList.push(compareValue);
    }
  }
  return differenceArrayList;
}

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

function dataTypeCheck(array) {
  // 1. Create array to store the result
  // 2. Looping inside array
  // 3. Check the data type of the value is it primitive data type of not
  // 4. if yes, push the value to new array

  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      typeof array[i] == "undefined" ||
      typeof array[i] == "string" ||
      typeof array[i] == "number" ||
      typeof array[i] == "Boolean" ||
      typeof array[i] == null
    ) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

console.log(dataTypeCheck([1, [], undefined, {}, "string", {}, []]));

function gameRockPaperScisors(actionUser) {
  const gameIndex = ["rock", "paper", "scisors"];

  const computerPick =
    gameIndex[Math.floor(Math.random() * gameIndex.length) + 1];

  const userSelected = actionUser.toLowerCase();
  const gameMapping = {
    rock: {
      paper: "Lose",
      scisors: "Win",
      rock: "tie",
    },
    paper: {
      rock: " Win",
      scisors: "Lose",
      paper: "tie",
    },
    scisors: {
      paper: "Win",
      scisors: "Tie",
      rock: "Lose",
    },
  };

  return `You ${gameMapping[userSelected][computerPick]}. you select : ${userSelected}, computer select :${computerPick}`;
}

console.log(gameRockPaperScisors("rock"));

function sumDuplicateValue(arr) {
  let compareValue;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    compareValue = arr[i];

    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (compareValue == arr[j]) {
          sum += compareValue;
        } else {
          continue;
        }
      }
    }
  }
  return sum;
}

console.log(sumDuplicateValue([1, 1, 3, 4, 5, 5, 2]));

// KAK BAGAS SOLUTION SUM DUPLICATE

function sumOfDuplicate(arr) {
  let sum = 0;
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      seen[arr[i]]++;
    } else {
      seen[arr[i]] = 1;
    }
  }

  for (let key in seen) {
    if (seen[key] > 1) {
      console.log(key);
      sum += Number(key) * seen[key];
    }
  }
  return sum;
}

console.log(sumOfDuplicate([1, 1, 3, 4, 5, 5, 2]));
