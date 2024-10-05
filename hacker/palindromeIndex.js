
function palindromeIndex(s) {
  // Write your code here
 let result = -1;
 let toArray = s.split("")
 const firstCopy = [...toArray]
  if(firstCopy.reverse().join("") === s) return result
  const length = s.length;
  let start = 0;
  let end = length - 1;
  let tempArray = [...toArray]
  let tempArray2 = [...toArray]
while(end > start){
  if(toArray[start] !== toArray[end]){
      tempArray.splice(start,1);
      if(tempArray.join("") === tempArray.reverse().join("")){
          result = start;
      } else{
          tempArray2.splice(end, 1);
          if(tempArray2.join("") === tempArray2.reverse().join("")){
              result = end;
          }
      }
      
      break;
  }
  
  start++;
  end--
}

return result
}

console.log(palindromeIndex("axcvbvcba"));

// aaab
// baa
// aaa