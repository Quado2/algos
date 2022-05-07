// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min = Infinity;
  let minIndex = 0;

  /*
  The trick here is to figure out that you only need to find the minimum average 
  of slices which are 2 or 3 in length. That is because a slice of 4 or larger is 
  basically a sum of slices with the length of 2 or 3 .
  A composed slice will never have an average sum lower than its components.
  */

 //check for the minimun using two slices
  for(let i = 0; i<A.length-1; i++){
      let sum = (A[i]+A[i+1])/2;
      if(sum < min){
          minIndex = i;
          min = sum
      }
  }


  //check for the minimum using three slices
  for(let i = 0; i<A.length-2; i++){
      let sum = (A[i]+A[i+1]+A[i+2])/3;
      if(sum < min){
          minIndex = i;
          min = sum
      }
  }



  return minIndex
}