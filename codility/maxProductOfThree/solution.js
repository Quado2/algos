// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.sort((a,b)=> a-b);
  let size = A.length;
  if(A[size-1] < 0){
     return A[size-1]*A[size-2]*A[size-3]
  } else{
  let result = Math.max(A[0]*A[1], A[size-2]*A[size-3])
  return result*A[size-1] 
  }
  
}