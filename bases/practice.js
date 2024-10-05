function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  // get the mid
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  //merge the array
  return merge(left, right);
}

function merge(left, right) {
  let j = 0;
  let i = 0;
  let newArr = [];
  while (left.length > j && right.length > i) {
    if (left[j] > right[i]) {
      newArr.push(right[i]);
      i++;
    } else {
      newArr.push(left[j]);
      j++;
    }
  }
  newArr = [...newArr, ...left.slice(j)];
  newArr = [...newArr, ...right.slice(i)];

  return newArr;
}

// console.log(mergeSort([]));

function getMedianTimes2(countArrays, days) {
  let sum = 0;
  for (let i = 0; i < countArrays.length; i++) {
    sum += countArrays[i];
    //if it is even
    if (sum * 2 === days) {
      return 2 * i + 1;
    }
    if (sum * 2 > days) {
      return 2 * i;
    }
  }
}

function fraudlentActivityNotification(debits, days) {
  const countArrays = new Array(201).fill(0);
  for (let i = 0; i < days; i++) {
    countArrays[debits[i]]++;
  }

  let counter = 0;

  for (let i = days; i < debits.length; i++) {
    const medianx2 = getMedianTimes2(countArrays, days);
    if (debits[i] >= medianx2) counter++;
    if(i === debits.length - 1) break;
    countArrays[debits[i - days]]--;
    countArrays[debits[i]]++;
  }

  return counter;
}

const days = 5;
const debits = [2, 3, 4, 2, 3, 6, 8, 4, 5];
console.log(fraudlentActivityNotification(debits, days));
