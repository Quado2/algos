function superDigit(n, k) {
  // Write your code here
  let superDigit  = ""
  let superArray = n.split("");
  let sum = 0;
  for (let i = 0; i < superArray.length; i++) {
    sum += parseInt(superArray[i])
  }
  superDigit = (sum*k).toString();

  while (superDigit.length > 1) {
    sum = 0;
    superArray = superDigit.split("");
    for (let i = 0; i < superArray.length; i++) {
      sum += parseInt(superArray[i]);
    }

    superDigit = sum.toString();
  }

  return parseInt(superDigit);
}

console.log(superDigit("123", 3));
