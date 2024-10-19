/*

You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

 

Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.

*/

function findSubstring(s: string, words: string[]) {
  //Find the word length;
  const wordLength = words[0]?.length;
  const totalWordLength = wordLength * words.length;
  let wordMap = new Map<string, number>();
  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  let stringLength = s.length;
  let result: number[] = [];
  let iterationSize = stringLength - totalWordLength;
  let i = 0;
  let currentWordMap = new Map(wordMap);
  let currentWordCount = words.length;

  while (i <= iterationSize) {
    const currentWords = s.substring(i, i + totalWordLength);
    let k = 0;
    while (k < currentWords.length) {
      const currentWord = currentWords.substring(k, k + wordLength);
      if ((currentWordMap.get(currentWord) || 0) > 0) {
        currentWordMap.set(currentWord, currentWordMap.get(currentWord)! - 1);
        currentWordCount -= 1;

        if (currentWordCount === 0) {
          result.push(i);
          currentWordMap = new Map(wordMap);
          currentWordCount = words.length;
        }
        k += wordLength;
      } else {
        k += wordLength;
        break;
      }
    }
    i++;
    currentWordMap = new Map(wordMap);
    currentWordCount = words.length;
  }

  return result;
}

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
