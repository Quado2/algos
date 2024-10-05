function merge(arr1, arr2) {
  const newArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      newArray.push(arr2[j]);
      j++;
    } else {
      newArray.push(arr1[i]);
      i++;
    }
  }

  if (j < arr2.length) {
    for (let k = j; k < arr2.length; k++) {
      newArray.push(arr2[k]);
    }
  }
  if (i < arr1.length) {
    for (let k = i; k < arr1.length; k++) {
      newArray.push(arr1[k]);
    }
  }

  return newArray;
}

//merge sort.
//idea is to split up the array untill its one or zero,
//a single element array is sorted. since this is true, we then
//merge the split arrays in sorted manner.
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

//console.log(mergeSort([3, 5, 2, 6, 2, 5, 2, 6, 8,200,-1]));
//console.log(merge([1], [4]));

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

//pivot
function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let pivotIndex = startIndex;
  let pivotValue = arr[startIndex];

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivotValue > arr[i]) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }

  swap(arr, pivotIndex, startIndex);

  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

//this type of sort continuosly put items into a bucket according to the digit at a
//particular index
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let bucketPos = getDigit(nums[j], i);
      digitBuckets[bucketPos].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

// console.log(radixSort([23, 232, 223, 82, 234,1,1,2,2,3,4,1, 2, 1, 3,1,2,23]));

function countingSort(arr) {
  //find the maximum number in the array
  const size = arr.length;
  if (size === 0) return arr;
  const max = Math.max(...arr);

  //count the number of appearance of each digit and put it in the corresponding array
  //eg. if the number of 4's is 2, then at array index of 4, put 2
  const countArray = new Array(max + 1).fill(0);
  for (let i = 0; i < size; i++) {
    countArray[arr[i]]++;
  }

  for (let i = 1; i <= max; i++) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  const resultArray = new Array(size).fill(0);
  for (let i = size - 1; i >= 0; i--) {
    resultArray[countArray[arr[i]] - 1] = arr[i];
    countArray[arr[i]]--;
  }

  return resultArray;
}

// console.log(countingSort([2,5,3,0,2,3,0,3]))
console.log(
  countingSort([23, 232, 223, 82, 234, 1, 1, 2, 2, 3, 4, 1, 2, 1, 3, 1, 2, 23])
);
