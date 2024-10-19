/*
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?


*/

function minWindow(s:string, t:string) {
  let charMap = new Map();
  for (const tChar of t) {
    charMap.set(tChar, (charMap.get(tChar) || 0) + 1);
  }
  let currentCharMap = new Map(charMap);
  let encounteredCharMap = new Map();
  let charCount = t.length;
  let currentCharCount = charCount;
  let stringLength = s.length;
  let i = 0,
    j = 0;
  let currentResult = "";
  let currentResultCount = Infinity;

  while (j < stringLength && i < stringLength) {
    if (charMap.has(s[j])) {
      encounteredCharMap.set(s[j], (encounteredCharMap.get(s[j]) || 0) + 1);
      if ((currentCharMap.get(s[j]) || 0) > 0) {
        currentCharMap.set(s[j], currentCharMap.get(s[j]) - 1);
        currentCharCount -= 1;
      }
      if (currentCharCount === 0) {
        const result = s.substring(i, j + 1);
        if (result.length < currentResultCount) {
          currentResultCount = result.length;
          currentResult = result;
        }

        while (currentCharCount === 0 && i < j) {
          if (encounteredCharMap.has(s[i])) {

            if (encounteredCharMap.get(s[i]) <= charMap.get(s[i])) {
              currentCharCount = 1;
              currentCharMap.set(s[i], 1);
              const result = s.substring(i, j + 1);
              if (result.length < currentResultCount) {
                currentResultCount = result.length;
                currentResult = result;
              }
            }
            encounteredCharMap.set(s[i], encounteredCharMap.get(s[i]) - 1);
            i++;
          } else {
            i++;
            if (currentCharCount === 0) {
              const result = s.substring(i, j + 1);
              if (result.length < currentResultCount) {
                currentResultCount = result.length;
                currentResult = result;
              }
            }
          }
        }
      }
    }
    j++;
  }

  return currentResult;
}

console.log(minWindow("cabefgecdaecf", "cae"));
