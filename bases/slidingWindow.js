//Given an array arr and a number num, find the maximum num consecutive sums
//of the elements of the array arr.

function maxSubArraySum(arr, num) {
  //This is using sliding window method.
  /*
  First we have to find the sum of the first num elements of the array
  */
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  /**
   * Then we slide across the array by adding the next value in the array and
   * subtracting the last value from the previous consecutive arrays
   */
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

//console.log(maxSubArraySum([2, 1, 3, 5, 66, 7, 2, 1, 4, 6, 9, 7, 10], 1));

/*
Write a function called minSubArrayLen which accepts two parameters 
- an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous 
subarray of which the sum is greater than or equal to the integer 
passed to the function. If there isn't one, return 0 instead.
*/
function minSubArrayLen(arr, num) {
  let j = 0;
  let i = 0;
  let currentSum = 0;
  let minimalNumber = Infinity;
  while (j <= arr.length) {
    if (currentSum >= num) {
      minimalNumber = Math.min(minimalNumber, j - i);
      currentSum -= arr[i];
      i++;
    } else {
      currentSum += arr[j];
      j++;
    }
  }

  if (minimalNumber === Infinity) return 0;
  return minimalNumber;
}

console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
