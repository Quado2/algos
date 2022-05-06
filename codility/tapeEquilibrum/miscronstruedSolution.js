// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A  = A.sort((a,b) => (a-b));
  let size = A.length;
  if(size === 2) return Math.abs(A[0] - A[1]);
  let pot1 = A[size-1], pot2 = A[size-2], leftItems = size-2;
  let currentMinimum = Math.abs(pot1 - pot2);
  let diff1, diff2
  for(let i= size-3; i>=0; i-=2){
      if(leftItems === 0) return currentMinimum;
      if(leftItems === 1){
          diff1 = Math.abs((pot1 + A[i]) - pot2);
          diff2 = Math.abs((pot2+A[i])  - pot1);
          return Math.min(diff1, diff2);
      } else{
          diff1 = Math.abs((pot1 + A[i]) - (pot2 + A[i-1]));
          diff2 = Math.abs((pot2+A[i])  - (pot1+A[i-1]));
          if(diff1 > diff2){
              pot1 += A[i-1];
              pot2 += A[i]
              currentMinimum = diff2;
          }else{
              pot2 += A[i-1];
              pot1 += A[i];
              currentMinimum = diff1
          }
      }

      leftItems -= 2;

  }
}