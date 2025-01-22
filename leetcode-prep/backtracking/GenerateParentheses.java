/*
 * 
 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
 */


import java.util.ArrayList;
import java.util.List;

class Solution {
  List<String> result;

  public void backtrack(int n, StringBuilder path, int nOpen, int nClose) {
    if(nOpen == nClose && nClose == n) {
      result.add(path.toString());
      return;
    }

    if(nOpen < n) {
      path.append("(");
      backtrack(n, path, nOpen+1, nClose);
      path.deleteCharAt(path.length() - 1 );
    }
    if(nClose < nOpen) {
      path.append(")");
      backtrack(n, path, nOpen, nClose+1);
      path.deleteCharAt(path.length() - 1);
    }

  }

  public List<String> generateParenthesis(int n) {
    StringBuilder path = new StringBuilder();
    result = new ArrayList<>();
    backtrack(n, path, 0, 0);
    return result;
  }
}
public class GenerateParentheses {

  public static void main(String[] args) {
      Solution sol = new Solution();
      System.out.println(sol.generateParenthesis(4));
  }
}
