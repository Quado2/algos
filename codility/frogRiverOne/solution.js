// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let set = new Set();
  for(let i = 0; i<A.length; i++){
      if(A[i]<=X){
          set.add(A[i])
          if(set.size === X) return i
      }
  }
  return -1
}