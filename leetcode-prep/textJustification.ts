/*

Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
 

Constraints:

1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth

*/

function fullJustify(words: string[], maxWidth: number): string[] {
  let line: string[] = [];
  let count = 0;
  let res: string[] = [];
  let i = 0;
  while (i < words.length) {
    const word = words[i];
    const isLastWord = i === words.length - 1;
    line.push(word);
    count += word.length;

    if (isLastWord) {
      const remainingSpaces = maxWidth - (count + line.length - 1);
      const lineWord = line.join(" ") + " ".repeat(remainingSpaces);
      res.push(lineWord);
    } else if (count + (line.length - 1) === maxWidth) {
      //Ideal scenario where it matches exactly
      res.push(line.join(" "));
      line = [];
      count = 0;
    } else if (count + line.length + words[i + 1].length > maxWidth) {
      //There is next word and adding it will make line words exceed the maxWidth

      //find out the amount of extra spaces left after puting line words;
      const spaces = maxWidth - count;
      if (line.length === 1) {
        const lineWord = line[0] + " ".repeat(spaces);
        res.push(lineWord);
      } else {
        //Get the space that every word separation can get
        const equalSpaces = Math.floor(spaces / (line.length - 1));

        //Get the total space that other word separation will not get evenly
        const remainingSpaces = spaces % (line.length - 1);
        let lineWord = "";
        for (let i = 0; i < line.length - 1; i++) {
          //This determines if the extra space should be attached to the space after this words
          const remainingSpaceShare = Math.min(
            Math.floor(remainingSpaces / (i + 1)),
            1
          );
          const totalSpaces = equalSpaces + remainingSpaceShare;
          lineWord = lineWord + line[i] + " ".repeat(totalSpaces);
        }

        lineWord = lineWord + line[line.length - 1];
        res.push(lineWord);
      }

      line = [];
      count = 0;
    }

    i++;
  }

  return res;
}
