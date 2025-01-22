/*
 * 
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

 

Example 1:


Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
Example 2:

Input: n = 1
Output: 1
 

Constraints:

1 <= n <= 9
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
  int n = 0;
  List<List<String>> result = new ArrayList<>();
  String[][] board;

  public void backtrack(int row, Set<Integer> colSet, Set<Integer> posDiagSet, Set<Integer> negDiagSet){
    if(row == this.n) {
      List<String> tempResult = new ArrayList<>();
      for(int i = 0; i< this.n; i++) {
        tempResult.add(String.join("", this.board[i]));
      }
      this.result.add(new ArrayList<>(tempResult));
      return;
    }

    for(int c = 0; c<this.n; c++) {
      if(colSet.contains(c) || posDiagSet.contains(c+row) || negDiagSet.contains(c-row)) {
        continue;
      }
      colSet.add(c);
      posDiagSet.add(c+row);
      negDiagSet.add(c-row);
      this.board[row][c] = "Q";
      backtrack(row+1, colSet, posDiagSet, negDiagSet);
      this.board[row][c] = ".";
      negDiagSet.remove(c-row);
      posDiagSet.remove(c+row);
      colSet.remove(c);
    }

  }

  public int totalNQueens(int n) {
    Set<Integer> colSet = new HashSet<>();
    Set<Integer> posDiagSet = new HashSet<>();
    Set<Integer> negDiagSet = new HashSet<>();
    this.board = new String[n][n];
    for(int i = 0; i < n; i++) {
      Arrays.fill(this.board[i], ".");
    }
    this.n = n;

    backtrack(0, colSet, posDiagSet, negDiagSet);
    return this.result.size();
  }

}

public class QueenAttack2 {

  public static void main(String[] args) {
      Solution sol = new Solution();
      System.out.println(sol.totalNQueens(4));
  }
}
