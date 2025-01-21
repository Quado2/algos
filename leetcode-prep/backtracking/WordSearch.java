class Solution {
  public void backTrack() {

  }

  public boolean exist(char[][] board, String word) {
      
      return true;
  }
}


public class WordSearch {

  public static void main(String[] args) {
    Solution sol = new Solution();
    char[][] board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    String word = "SEE";
    System.out.println(sol.exist(board, word));
  }

  
}
