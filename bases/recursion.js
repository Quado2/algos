function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

//countDown(8);

//summing a range of values
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

//console.log(sumRange(4))

//with pure recursion
function collectOddValues(arr) {
  let newArray = [];
  if (arr.length === 0) return newArray;
  if (arr[0] % 2 > 0) newArray.push(arr[0]);
  return newArray.concat(collectOddValues(arr.slice(1)));
}
//

//using helper recursion

function collectOddValues2(arr) {
  const oddArray = [];

  function helper(arr) {
    if (arr.length === 0) return;
    if (arr[0] % 2 > 0) oddArray.push(arr[0]);

    helper(arr.slice(1));
  }

  helper(arr);
  return oddArray;
}

//console.log(collectOddValues2([1, 2, 3, 4, 5]));

function isPalindrome(str) {
  //remove non numeric character and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  function helper(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) return false;

   return helper(str.slice(1, -1));
  }

  const result = helper(str);
  return result
}

console.log(isPalindrome("a c@#@%$@#@ a"));
