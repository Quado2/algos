/*
 * 
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 */




class Solution {
  boolean isFound = false;
  int[][] navigations = {{0,1}, {0, -1}, {1,0}, {-1, 0}};
  int rowSize = 0;
  int colSize = 0;

  public void backTrack(int r, int c, char[][] board, String word, int wordIndex, boolean[][] visited) {
    if((r >= this.rowSize) || (r < 0) || (c >= this.colSize) || (c < 0) || (visited[r][c]) || word.charAt(wordIndex) != board[r][c]) {
      return;
    }

    if(wordIndex == (word.length()-1)){
      this.isFound = true;
      return;
    }
    visited[r][c] = true;
    for(int[] nav: navigations){
      backTrack(r+nav[0], c+nav[1], board, word, wordIndex+1, visited);
    }
    visited[r][c] = false;
    
  }

  public boolean exist(char[][] board, String word) {
      int row = board.length;
      int col = board[0].length;
      this.rowSize = row;
      this.colSize = col;
      this.isFound = false;

      for(int i = 0; i < row; i++) {
        for(int j = 0; j < col ; j++) {
          backTrack(i, j, board, word,0, new boolean[row][col]);
        }
      }

      return this.isFound;
  }
}


public class WordSearch {

  public static void main(String[] args) {
    Solution sol = new Solution();
    char[][] board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    String word = "SEE";

    char[][] board2 = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    String word2 = "ABCB";
    System.out.println(sol.exist(board, word));
    System.out.println(sol.exist(board2, word2));
  }

  
}
