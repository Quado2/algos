function solution(arr, ranges){
  
  let prefixSum = [];
  for(let i = 0; i<arr.length+1; i++) prefixSum.push(0);

  
  //get the prefix sums
  for(let i = 0; i< arr.length; i++){
    prefixSum[i+1] = prefixSum[i]+arr[i]
  }


  let result = [];
  for(let i = 0; i<ranges.length; i++){
    //we need to step back one step at the lower bound;
    let upper = ranges[i][1];
    let lower = ranges[i][0] - 1;
    let sumBetween = prefixSum[upper] - prefixSum[lower];
    result.push(sumBetween)
  }

  return result;
}

let a = [ 3, 6, 2, 8, 9, 2 ];
let q =[ [ 2, 3 ],[ 4, 6 ],[ 1, 5 ],[ 3, 6  ]];

console.log(solution(a, q))