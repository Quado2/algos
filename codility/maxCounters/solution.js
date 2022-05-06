// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
 
  let arr = [];
  let prevMax = 0;
  let currentMax = 0;


  for(let i =0; i<N; i++){
      arr.push(0);
  }
  for(let i=0; i<A.length; i++){
      let index = A[i]-1;
      if(index < N){
          if(arr[index] < prevMax) arr[index] = prevMax
           arr[index] ++;
           currentMax = Math.max(currentMax, arr[index])
      }else{
          prevMax = currentMax
      }
  }

  for(let i = 0; i<arr.length; i++){
      if(arr[i] < prevMax) arr[i] = prevMax
  }

  return arr
}