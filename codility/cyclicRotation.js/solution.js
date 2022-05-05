// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let size = A.length;
  let newArray = []
  for(let i=0; i<size; i++){
      let newPosition = (i+K)%size;
      newArray[newPosition] = A[i];
  }

  return newArray
}