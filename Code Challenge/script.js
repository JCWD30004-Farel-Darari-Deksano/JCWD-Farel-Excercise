// Roman to intger
var romanToInt = function (s) {
  // 1.Buat object menampung value rome
  // 2. Buat variable result untuk menampung kalkulasi
  // 3. Looping kedalam string
  // 4. sum bedasarkan  current value dengan value didalam index
  // 5. return result

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      // check if next index is V or X
      if (s[i + 1] === "V" || s[i + 1] === "X") {
        // If yes, value of next index - value of the currennt index
        sum += romanNumerals[s[i + 1]] - romanNumerals[s[i]];
        // skip the next index because is already group at once
        i++;
      } else {
        sum += romanNumerals[s[i]];
      }
    }
    // CHECK IF INDEX IS X
    else if (s[i] === "X") {
      if (s[i + 1] === "L" || s[i + 1] === "C") {
        sum += romanNumerals[s[i + 1]] - romanNumerals[s[i]];
        i++;
      } else {
        sum += romanNumerals[s[i]];
      }
    } else if (s[i] === "C") {
      if (s[i + 1] === "D" || s[i + 1] === "M") {
        sum += romanNumerals[s[i + 1]] - romanNumerals[s[i]];
        console.log(sum);
        i++;
      } else {
        sum += romanNumerals[s[i]];
      }
    } else {
      sum += romanNumerals[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt("MCMXCIV")); // 3

var lengthOfLastWord = function (s) {
  const arrString = s.trim().split(" ");
  return arrString[arrString.length - 1].length;
};

console.log(lengthOfLastWord(" Hello World ")); // 5
