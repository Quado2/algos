// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(A.length<3)return 0;
  A = A.sort((a,b)=> a-b);
  for(let i = A.length-1; i>1; i--){
   if((A[i]+A[i-1]) > A[i-2] && (A[i]+A[i-2]) > A[i-1] && A[i-1]+A[i-2] > A[i]) return 1
  }
  return 0
}