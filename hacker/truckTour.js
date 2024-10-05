function truckTour(petrolpumps) {
  // Write your code here
  const size = petrolpumps.length;
  let  correctIndex = -1;
  for(let i=0; i<size; i++){
    let petrolSum = 0;
    let distanceSum = 0;
    let numberOfLoops = 0;
    for(let j=i; j<(size*2); j++){
      
      petrolSum += petrolpumps[j][0];
      distanceSum += petrolpumps[j][1];
      numberOfLoops ++;
      if(petrolSum < distanceSum){
        break;
      }
      if(j >= size-1 && numberOfLoops < size){
        j = -1;
      }
      if(numberOfLoops >= size){
        correctIndex = i;
        break;
      }
    }
    if(correctIndex !== -1){
      break;
    }
  }

  return correctIndex

}

const sampleInput = [ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ];
console.log(truckTour(sampleInput))
const result =  1;