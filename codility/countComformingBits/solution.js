// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  function getIntersect(setA,setB){
      return new Set([...setA].filter(el => setB.has(el)))
  }

  a2 = parseInt(A).toString(2);
  b2 = parseInt(B).toString(2);
  c2 = parseInt(C).toString(2);
  let aSet = new Set(), bSet = new Set(), cSet = new Set();

  //find the positions where the char is "0"
  for(let i = 0; i< a2.length; i++){
      if(a2.charAt(i) === "0") aSet.add(i);
      if(b2.charAt(i) === "0") bSet.add(i);
      if(c2.charAt(i) === "0") cSet.add(i);
  }

  //get their intersects
  let aInterB = getIntersect(aSet, bSet);
  let aInterC = getIntersect(aSet, cSet);
  let bInterC = getIntersect(bSet,cSet);
  let aInterBInterC = getIntersect(aInterB,cSet);

  //get the posible values
  let result = Math.pow(2,aSet.size) + Math.pow(2,bSet.size) + Math.pow(2,cSet.size);


  // subtract possible duplicates.
  /* 
  The are:
      2: since we are definitely going to have three occurences of all 1s
      (Math.pow(2,aInterB.size) -1): becuase the common values between A and B will cause duplicates in the range of 2 to power common values
      same with AinterC
      (Math.pow(2,(bInterC.size - aInterBInterC.size)) -1): becuase since we have taken care of AinterB and AinterC, then we need to subtract the ones that have duplicated between the three
  */
  
  result -= (2 + (Math.pow(2,aInterB.size) -1) + (Math.pow(2,aInterC.size) - 1) + (Math.pow(2,(bInterC.size - aInterBInterC.size)) -1))

  return result








}