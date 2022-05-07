// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(A.length == 0) return 0;
  if(A.length === 1 ) return 1;

  const set = new Set();
  for(let i = 0; i<A.length; i++){
      set.add(A[i]);
  }

  return set.size;
}