// use continuos swapping to bubble the largest number to the last
//compare two adjacent numbers and swap if the first is hhigher than the second
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //we will swap
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

//compare from begining till end and swap the first
//with the least number encountered. then move the begining index by 1
function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    //store the begining index as the lowest
    let lowest = i;

    //loop through to find the actual lowest
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    //swap the arrays
    const temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }

  return arr;
}

//we start by picking taking the first element of the array as sorted
//then we take the next element and insert it in the previous elements
//where it is sorted.
function insertionSort(arr) {
  if (arr.length <= 1) return arr;
  for (var i = 1; i < arr.length; i++) {
    //pick the current value. The ones before it is already sorted
    let currentValue = arr[i];

    //move backwars and check if the current array is less than
    //the next array. while copying over the preceding array;
    //if this is true, stop the loop and insert the current value
    //at the position after the last one we checked
    let j = i - 1;
    while (j >= 0 && currentValue < arr[j]) {
      index = j;
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([1, 2, 5, 2, 5, 3, 7, 3, 4]));
