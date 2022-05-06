function solution(arr, N){
  //N = the number of arrays to make
  //arr the array of operations;

  //using the prefix method
  let data = [];
  for(let i = 0; i<N+1; i++) data.push(0);
  //step 1: add 100 at the first position
  //step 2: remove 100 from second position + 1;
  for(let i=0; i < arr.length; i++){
    const upper = arr[i][1];
    const lower = arr[i][0];
    data[lower] += 100;
    data[upper + 1] -= 100;
  }

  let prefixSum = [];
  for(let i = 0; i<N+1; i++) prefixSum.push(0);

  let max = 0;
  for(let i = 1; i< prefixSum.length; i++){
    prefixSum[i] = prefixSum[i-1] + data[i]
    max = Math.max(prefixSum[i], max);
  }
  
  return max;
}

let m = 3;
let q = [[2,4],[1,3],[1,2]];

console.log(solution(q,5))


