/*
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.
 * 
 * 
 */


import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;

public class wordLadder {
  
  public static void main(String[] args) {
    
    List<String> wordList = Arrays.asList("hot", "dot", "dog", "lot", "log", "cog");
    System.out.println(getWordLadder("hit", "cog", wordList ));
  }


  public static int getWordLadder(String beginWord, String endWord, List<String> wordList) {

    Queue<String> q = new LinkedList<>();
    Set<String> visitedWords = new HashSet<>();
    Set<String> wordBank = new HashSet<>(wordList);
    if(!wordBank.contains(endWord)) return 0;

    q.add(beginWord);
    visitedWords.add(beginWord);
    int steps = 1;

    while(!q.isEmpty()) {
      int qSize = q.size();
      for(int i = 0; i < qSize; i++) {
        String currWord = q.poll();
        for(int j = 0; j<currWord.length(); j++) {
          for(char c = 'a'; c <= 'z'; c++) {
            char[] wordArr = currWord.toCharArray();
            wordArr[j] = c;
            String newWord = new String(wordArr);
            if(newWord.equals(endWord)) return steps + 1;

            if(!visitedWords.contains(newWord) && wordBank.contains(newWord)) {
              visitedWords.add(newWord);
              q.offer(newWord);
            }
          }
        }
       
      }
      steps++;
    }



    return 0;
  }
}
