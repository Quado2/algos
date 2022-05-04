function maxSubArraySum(nums, size) {
  if (nums.length < size || size < 1) return null;
  let currSum = 0;
  let maxSumSeen = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (i >= size - 1) {
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum -= nums[i - (size - 1)];
    }
  }

  return maxSumSeen;
}

// const arr1 = [1,2,3,5,4,8,6,2];
// console.log(maxSubArraySum(arr1, 0))

function lengthOfLongestSubstring(s) {
  if (s == null || s.length === 0) return 0;
  let i = 0,
    j = 0,
    max = 0;

  const characterSet = new Set();
  while (i < s.length) {
    let c = s.charAt(i);
    while(characterSet.has(c)){
      characterSet.delete(s.charAt(j));
      j++
    }
    characterSet.add(c);
    max = Math.max(max, (i-j+1));
    i++
    
  }

  return max
}

console.log(lengthOfLongestSubstring("adfajkjajfj"))
