function sortAsc(a, b) {
  return a - b;
}

function solution(A) {
  let counter = 0;
  let j = 0;
  let leftLimit = [];
  let rightLimit = [];

  //fill the left and right limits of each circle
  for (var i = 0; i < A.length; i++) {
    leftLimit[i] = i - A[i];
    rightLimit[i] = i + A[i];
  }

  //sort them in an ascending order - why ? Basically we will rearrange their limits in an ascending way, we will have in leftLimit all open circles while  in the right we will have where the next circle closes
  leftLimit.sort(sortAsc);
  rightLimit.sort(sortAsc);

  //loop through all the elements of the RIGHT boundaries
  for (var i = 0; i < A.length; i++) {
    //this is the tricky part to understand
    //on the left we have the boundaries of open circles, on the right the boundary of the next circle
    //as long as there are circles open (rightLimit[i] >= leftLimit[j]) and (j < A.length)
    while (j < A.length && rightLimit[i] >= leftLimit[j]) {
      //we have circles at each position, so, as long as the left boundaries are smaller or equal to the right boundary, there are circles intersecting there
      //if j surpasses j, it means we overcalculated and we start to decrease the number of intersections
      counter += j - i;
      //pass to the next open circle
      j++;
    }
    if (counter > 10000000) return -1;
  }

  return counter;
}
