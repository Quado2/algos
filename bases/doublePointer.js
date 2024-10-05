function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;

  if (arr.length === 1) return undefined;

  while (j > i) {
    if (arr[j] + arr[i] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[j] + arr[i] > 1) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return undefined;
}

// console.log(sumZero([-2,-1,2,4,6,8,9]))

//my method
function countUniqueValues(arr) {
  const arrObj = {};
  for (let i of arr) {
    arrObj[i] = (arrObj[i] || 0) + 1;
  }

  return Object.keys(arrObj).length;
}

console.log(countUniqueValues([3]));

//using double pointers
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;

  //First we have to sort the array if it's not sorted
  arr.sort((a, b) => a - b);

  let i = 0; //the lagging pointer
  let j = 1; //the leading pointer
  while (j < arr.length) {
    //As we are sliding up, if the value is same we just move the
    // j pointer forwards. If its not same, then we have encountered a unique value,
    // we will now increase i by one, then place the unique value at the new position of i;
    // then increase the j so we continue going up.
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      j++;
    }
  }

  return i + 1;
}
