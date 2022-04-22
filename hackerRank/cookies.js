function locationOf(element, array, start, end) {
  start = start || 0;
  end = end || array.length;
  var pivot = parseInt(start + (end - start) / 2, 10);
  if (array[pivot] === element) return pivot;
  if (end - start <= 1)
    return array[pivot] > element ? pivot - 1 : pivot;
  if (array[pivot] < element) {
    return locationOf(element, array, pivot, end);
  } else {
    return locationOf(element, array, start, pivot);
  }
}

function insert(element, array) {
  array.splice(locationOf(element, array) + 1, 0, element);
  return array;
}



function cookies(k, A) {
  // Write your code here
  let noOfOperations = 0;
  const size = A.length;
  A = A.sort((a,b)=> a-b);
  
  while(true){
      if(A[0]>=k){
          break;
      }
      let newSweetnes = A[0] + (2*A[1]);
      A.splice(0,2);
      A = insert(newSweetnes, A);
      // let inserted=false;
      // for(let i = 0; i< A.length; i++){
      //     if(A[i]>=newSweetnes){
      //     A.splice(i,0,newSweetnes);
      //     inserted = true;
      //     break;
      //     }
      // }
      // if(!inserted){
      //     A.push(newSweetnes)
      // }
      
      noOfOperations++
      if(noOfOperations > size-1){
          noOfOperations = -1;
          break;
      }
  }
  return noOfOperations;
}