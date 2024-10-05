function countingSort(arr) {
  // Write your code here

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const countArray = [];
  for (let i = 0; i < max; i++) {
    countArray.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }
  const sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i);
      countArray[i]--;
    }
  }

  return countArray;
}
