// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.sort((a,b) => a-b)
  if(A.length === 0) return 1;
 if(A[0] != 1) return 1;
 for(let i=0; i<A.length-1; i++){
     let j = i+1;
     if((A[j] - A[i]) != 1) return A[j] - 1;
 }
 return A[A.length-1] + 1
}