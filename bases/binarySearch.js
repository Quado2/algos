const binarySearch = (val, arr) =>{
  let lower = 0;
  let upper = arr.length - 1;

  while(lower <= upper){
    const middle = lower + Math.floor((upper - lower)/2);

    if(val === arr[middle]) return middle
    if(val > arr[middle]){
      lower = middle + 1;
    }else{
      upper = middle - 1;
    }
  }

  return -1
}

const values = [1,3,4,5,6,7,8,9,10];
console.log(binarySearch(10,values));