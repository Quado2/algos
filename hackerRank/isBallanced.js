let test3 = "{(([])[])[]}"
let test2 = "{(([])[])[]]}"
let test1 = "{(([])[])[]}[]"

function isBallanced(s){
  let length = s.length;
  if(length%2 != 0) return "NO";
  if(s.charAt(0)==")" || s.charAt(0)=="]" || s.charAt(0)=="}") return "NO";
  
  const arr = s.split("");
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === ")"){
      if(arr[i-1] !="("){
        return "NO"
      }else{
        arr.splice(i-1,2);
        i--
      }
    }
  }

  return arr
}
let arr2 = "adafadf()adf()";
console.log(isBallanced(arr));


