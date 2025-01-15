class TrieNode {
  Map<Character, TrieNode> children;
  boolean isWordEnd;

  public TrieNode(){
      this.children = new HashMap<>();
      this.isWordEnd = false;
  }
}

class Solution {

  TrieNode root = new TrieNode();

  public void addWord(String word) {
      var node = this.root;
      for (char c : word.toCharArray()) {
          node.children.putIfAbsent(c, new TrieNode());
          node = node.children.get(c);
      }
      node.isWordEnd = true;
  }

  public List<String> findWords(char[][] board, String[] words) {
      for (String word : words) {
          addWord(word);
      }

      int row = board.length;
      int col = board[0].length;
      boolean[][] visitedCells = new boolean[row][col];
      Set<String> foundWords = new HashSet<>();

      for (int r = 0; r < row; r++) {
          for (int c = 0; c < col; c++) {
              dfs(r, c, this.root, "", board, visitedCells, foundWords, row, col);
          }
      }

      return new ArrayList<>(foundWords);
  }

  private void dfs(int r, int c, TrieNode node, String word, char[][] board, boolean[][] visitedCells, Set<String> foundWords, int row, int col) {
      if (r < 0 || r >= row || c < 0 || c >= col || visitedCells[r][c] || node.children.get(board[r][c]) == null) {
          return;
      }

      visitedCells[r][c] = true;
      char chr = board[r][c];
      node = node.children.get(chr);
      word += chr;

      if (node.isWordEnd) {
          foundWords.add(word);
          node.isWordEnd = false;
      } 

      dfs(r + 1, c, node, word, board, visitedCells, foundWords, row, col);
      dfs(r - 1, c, node, word, board, visitedCells, foundWords, row, col);
      dfs(r, c + 1, node, word, board, visitedCells, foundWords, row, col);
      dfs(r, c - 1, node, word, board, visitedCells, foundWords, row, col);

      visitedCells[r][c] = false;
  }
}

public class WordSearch2 {
  public static void main(String[] args) {
    System.out.println("Hellow")

    String[][] board = {
      {"o", "a", "a", "n"},
      {"e", "t", "a", "e"},
      {"i", "h", "k", "r"},
      {"i", "f", "l", "v"}
  };
  String[] words = {"oath", "pea", "eat", "rain"};

    Solution solution = new Solution();
    System.out.println(solution.findWords(board, words));
  }
}