// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.sort((a,b) => a-b);
  let checkOnes = false
  if(A.length === 0 || A[A.length -1] < 0) return 1;
  if(A.length === 1 ) return A[0] == 1 ? 2 : 1
  if(A[0] > 1) return 1
 
  for(let i = 0; i<A.length; i++){
      if((A[i+1] - A[i]) > 1){
          if(A[i] < 0){
           
          checkOnes = true;
             
          }else{
              return A[i] + 1
          }
          

      }
  }

  let ones = A.filter(el => el===1);
  if(ones.length == 0)return 1

  return A[A.length-1] + 1;
}