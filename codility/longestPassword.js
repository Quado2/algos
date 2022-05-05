// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const record = {}
  let passArr = S.split(" ");
  for (let i = 0; i< passArr.length; i++){
      record[passArr[i]] = {numbers:0, letters:0, failed: false}
      for(let j = 0; j< passArr[i].length; j++){
          let newChar = passArr[i][j];
          let code = newChar.charCodeAt(0)
          if( code < 48 || code > 122 || (code > 57 && code < 65)) {
              record[passArr[i]] = {failed: true}
              break }
          else if( code >= 65 && code<=122){
              record[passArr[i]].letters += 1
          } else if( code>= 48 && code<=57){
              record[passArr[i]].numbers +=1;
          }
      }
  }

  let maxPassed = -1
 Object.keys(record).forEach(key => {
     if(!record[key].failed){
         if(record[key].numbers%2 > 0 && record[key].letters%2===0){
             maxPassed = Math.max(maxPassed, key.length)
         }
     }

 })

 console.log(record)

 return maxPassed

  
}

console.log(solution("adfad 43ff 434f aa434:"))