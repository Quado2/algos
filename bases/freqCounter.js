function same(arr1, arr2) {
  const arrObj1 = {};
  const arrObj2 = {};
  for (let arr of arr1) {
    arrObj1[arr] = (arrObj1[arr] || 0) + 1;
  }
  for (let arr of arr2) {
    arrObj2[arr] = (arrObj2[arr] || 0) + 1;
  }
  for (let key in arrObj1) {
    if (!(key ** 2 in arrObj2)) {
      return false;
    }
    if (arrObj2[key ** 2] !== arrObj1[key]) {
      return false;
    }
  }
  return true;
}

function same2(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let i in arr1) {
    if (arr2[i] !== arr1[i] ** 2) return false;
  }
  return true;
}

// const samp1 = [1, 1, 2, 3, 2];
// const samp2 = [4, 4, 9, 1, 1];
// const samp3 = [3, 4, 9, 1, 1];
// const samp4 = [4, 9, 9, 4, 1];
// console.log(same2(samp1, samp3))

//my approach
function anagram(str1, str2) {
  const strObj = {};
  const strObj2 = {};
  for (let value of str1) {
    strObj[value] = (strObj[value] || 0) + 1;
  }
  for (let value of str2) {
    strObj2[value] = (strObj2[value] || 0) + 1;
  }

  for (let key in strObj) {
    if (strObj[key] !== strObj2[key]) return false;
  }

  return true;
}

function anagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  const strObj = {};
  for (let value of str1) {
    strObj[value] = (strObj[value] || 0) + 1;
  }

  for (let letter of str2) {
    if (!strObj[letter]) {
      return false;
    } else {
      strObj[letter] -= 1;
    }
  }

  return true;
}

let str1 = "azaa";
let str2 = "aaza";
let str3 = "acca";

//console.log(anagram2(str1, str2));

// Find 2 movies in an array that add up EXACTLY to a given flight   length
// Input
// flightLength: duration of the flight in minutes (integer)
// movieLengths: array of movie times in minutes (array of integers)
// Output
// boolean, true if there exists TWO movies that add up EXACTLY to the flightLength
function findTwoMovies(flightLength, movieLengths) {
  let lengthObj = {};
  let i = 0;
  for (movieLength of movieLengths) {
    //check if the object already contains what we can add that
    // to the current movielLength in iteration to get the flight length.
    //if it exist then return true
    if (flightLength - movieLength in lengthObj) return true;

    //if not, then add it to the object as a key
    lengthObj[movieLength] = i++;
  }

  // if the entire loop is done without returning true, then return false
  return false;
}

console.log(findTwoMovies(160, [20, 30, 110, 40, 50]));
