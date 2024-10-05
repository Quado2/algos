function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (value > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return arr[middle] === value ? middle : -1;
}
