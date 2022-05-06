// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

let newSum = A.shift();
  //sum the array
  let sum = 0;
  for(let i=0; i< A.length; i++){
      sum += A[i]
  }
  // use a loop to sum from begining to end  while 
  // decreasing the sum and saving the minimun
  let minDiff = Infinity;
  for(let i=0; i<A.length; i++){
      minDiff = Math.min(Math.abs(minDiff), Math.abs(sum-newSum))
      newSum += A[i];
      sum -= A[i];
  }

  return minDiff
}