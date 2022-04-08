function minimumBribes(q) {
  // Write your code here
  const length = q.length;
  let numberOfBribes = 0;
  let lastBribed = 0;

  for (let i = 0; i < length - 1; i++) {
    
    //check for when the bribe is chaotic
    if (q[i + 1] - q[i] > 3 && lastBribed < 1) {
      numberOfBribes = "Too Chaotic";
      break;
    }

    //check for edge case
    if (q[i + 1] - q[i] < 0 && lastBribed === 0) {
      numberOfBribes += q[i] - q[i + 1];
      lastBribed += q[i] - q[i + 1];
      console.log("Edge case", q[i+1], q[i], {lastBribed, numberOfBribes})
    }

    //check for actual bribe
    if ((q[i + 1] + lastBribed) - q[i] >= 2 && lastBribed === 0) {
      numberOfBribes += q[i + 1] - q[i] - 1;
      lastBribed = q[i + 1] - q[i] - 1;
      console.log("there is bribe: ", q[i + 1], q[i], q[i + 1] - q[i]);
    } else if (q[i + 1] - q[i] >= 2 && lastBribed > 0) {
      lastBribed -= q[i + 1] - q[i] - 1;
    }

    //check for consecutive bribe
    if((q[i + 1] + lastBribed) - q[i] >= 2 && lastBribed > 0){
      //do here
      console.log("Consecutive bribe: ",q[i+1], q[i],{lastBribed, numberOfBribes})
      numberOfBribes += q[i+1] -  q[i];
      lastBribed += q[i+1] -  q[i];
    }
  }

  return numberOfBribes;
}

console.log(minimumBribes([1, 2, 4, 5, 3, 6, 7, 9, 8]));
