function pairs(k, arr) {
  // Write your code here
const sortedArray = arr.sort((a,b)=>(a-b));
let i=0, j=1, num = 0;
while(j<arr.length){
  let diff = sortedArray[j]-sortedArray[i];
  if(diff==k){
      num++
      j++
  } else if(diff < k){
      j++
  } else if(diff>k){
      i++
  }
}

return num
}

