function merge(arr1, arr2) {
  let sortedArr = [];
  let p1 = 0,
    p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      sortedArr.push(arr1[p1++]);
    } else {
      sortedArr.push(arr2[p2++]);
    }
  }

  while (p1 < arr1.length) {
    sortedArr.push(arr1[p1++]);
  }

  while (p2 < arr2.length) {
    sortedArr.push(arr2[p2++]);
  }

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, mid));
  let arr2 = mergeSort(arr.slice(mid));

  return merge(arr1, arr2);
}

const arr = [5, 8, 3, 9, 1, 2];
console.log(mergeSort(arr));
