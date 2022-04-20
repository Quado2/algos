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
        console.log("about to say no for (:", arr)
        return "NO"
      }else{
        arr.splice(i-1,2);
        i += -2
      }
    }

    else if(arr[i] === "]"){
      if(arr[i-1] !="["){
        console.log("about to say no for [:", arr)
        return "NO"
      }else{
        arr.splice(i-1,2);
        i += -2
      }
    }

    else if(arr[i] === "}"){
      if(arr[i-1] !="{"){
        console.log("about to say no for {:", arr)
        return "NO"
      }else{
        arr.splice(i-1,2);
        i += -2
      }
    }

  }

  return "YES"
}
let arr2 = "{[([{}])]]}";
console.log(isBallanced(arr2));


