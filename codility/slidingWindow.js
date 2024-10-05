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
    while (characterSet.has(c)) {
      characterSet.delete(s.charAt(j));
      j++;
    }
    characterSet.add(c);
    max = Math.max(max, i - j + 1);
    i++;
  }

  return max;
}

// console.log(lengthOfLongestSubstring("pwwkew"))

function minWindow(s, t) {
  if (s == null || t == null || s.length === 0 || t.length === 0) return "";

  //for a map
  let stringMap = new Map();
  for (let i = 0; i < t.length; i++) {
    let c = t.charAt(i);
    stringMap.set(c, stringMap.get(c) ? stringMap.get(c) + 1 : 1);
  }

  //initialize the variables
  let i = 0,
    j = 0,
    count = stringMap.size,
    found = false,
    minLenth = s.length,
    left = 0,
    right = s.length - 1;

  //slide the j along until we have found all the substring
  while (j < s.length) {
    let endChar = s.charAt(j++);
    if (stringMap.has(endChar)) {
      stringMap.set(endChar, stringMap.get(endChar) - 1);
      if (stringMap.get(endChar) === 0) {
        count -= 1;
      }
    }
    if (count > 0) continue;

    //slide the i till we have removed all the redundant characters
    while (count === 0) {
      let startChar = s.charAt(i++);
      if (stringMap.has(startChar)) {
        stringMap.set(startChar, stringMap.get(startChar) + 1);
        if (stringMap.get(startChar) > 0) {
          count += 1;
        }
      }
    }

    //if this is true, then we have found a new minimum
    if (j - i < minLenth) {
      found = true;
      minLength = j - i;
      left = i;
      right = j;
    }
  }

  
  return found ? s.substring(left-1, right): ""
}

console.log(minWindow("dafadjfk", "adf"));
