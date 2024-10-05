/*

Whenever George asks Lily to hang out, she's busy doing homework. George wants to help her finish it faster, but he's in over his head! Can you help George understand Lily's homework so she can hang out with him?

Consider an array of  distinct integers, . George can swap any two elements of the array any number of times. An array is beautiful if the sum of  among  is minimal.

Given the array , determine and return the minimum number of swaps that should be performed in order to make the array beautiful.

Example


One minimal array is . To get there, George performed the following swaps:

    Swap      Result
          [7, 15, 12, 3]
    3 7   [3, 15, 12, 7]
    7 15  [3, 7, 12, 15]
   
It took  swaps to make the array beautiful. This is minimal among the choices of beautiful arrays possible.

Function Description

Complete the lilysHomework function in the editor below.

lilysHomework has the following parameter(s):

int arr[n]: an integer array
Returns

int: the minimum number of swaps required
Input Format

The first line contains a single integer, , the number of elements in . The second line contains  space-separated integers, .

Constraints

Sample Input

STDIN       Function
-----       --------
4           arr[]size n = 4
2 5 3 1     arr = [2, 5, 3, 1]
Sample Output

2
Explanation

Define  to be the beautiful reordering of . The sum of the absolute values of differences between its adjacent elements is minimal among all permutations and only two swaps ( with  and then  with ) were performed.

*/



function swap(arr, first, second){
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp
}

function swapMap(map, first, second){
  const temp = map.get(first);
  map.set(first, map.get(second));
  map.set(second, temp);
}

function getSwapCount(arr, sortedArr){
  const arrCopy = arr.slice();
  const arrIndexMap = new Map();
  for(let i = 0; i < arr.length; i++){
      arrIndexMap.set(arrCopy[i], i)
  }
  
  let swapCount = 0;
  for(let i=0; i < arr.length; i++){
      const arrData = arrCopy[i];
      const sortedData = sortedArr[i]
      if(arrData !== sortedData){
          swap(arrCopy, i , arrIndexMap.get(sortedData));
          swapMap(arrIndexMap, arrData, sortedData)
          swapCount++
      }
  } 
  return swapCount
}

function lilysHomework(arr) {
  // Write your code here
  let count1 = 0;
  //We need to sort the array both in ascending and in descending order
  const ascSort = arr.slice().sort((a,b) => a-b);
  const dscSort = ascSort.slice().reverse();
  
  //Then we count the number of swaps that need to happen for the array to be sorted as each of the ascending and descending order
  const ascSWapCount = getSwapCount(arr, ascSort)
  const dscSwapCount = getSwapCount(arr, dscSort)
  
  //Then the minimum of the two counts is what is needed
  return Math.min(ascSWapCount, dscSwapCount)    
  
}