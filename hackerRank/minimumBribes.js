function minimumBribes(q) {
  // Write your code here
  const length = q.length;
  let numberOfBribes = 0;

  for (let i = 0; i < length; i++) {
    
    const indexDifference = q[i] - (i+1);

    if(indexDifference > 2){
      numberOfBribes = "Too Chaotic";
      break;
    }

    //Check the number of bribes each has taken.
    //this is obtained by checking the number of people ahead of each whose number is larger 
    //than it.
    for(let j= q[i]-2; j<i; j++){
      if(q[j] > q[i]){
        numberOfBribes++
      }

    }
    
  }
  return numberOfBribes;
}

//console.log(minimumBribes([2, 3, 4, 6, 1, 5, 9, 8, 7]));
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
