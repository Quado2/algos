// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.sort((a,b) => a-b)
  
  for(let i=0; i<A.length; i+=2){
      let j = i+1;
      if(A[i] != A[j])
      return A[i]
  }
}
