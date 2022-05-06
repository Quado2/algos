// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(A.length === 1) return 0;
  let firstDirection = 0;
  let sameDirection = 1, crosses = 0, startIndex


  for(let i = 0; i<A.length; i++){
      if(A[i] == 0) {
          startIndex = i;
          break;
      }
  }

  for(let i = startIndex+1; i<A.length; i++){
      if(A[i] == firstDirection) sameDirection++;
      else crosses += sameDirection;
      if(crosses > 1000000000) return -1
  }
  return crosses
}