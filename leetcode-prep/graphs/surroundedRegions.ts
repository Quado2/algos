/*

130. Surrounded Regions
Solved
Medium
Topics
Companies
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

 

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:


In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]

Output: [["X"]]

 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.

*/

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const colSize = board.length;
  const rowSize = board[0].length;
  const movements = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function capture(board: string[][], i: number, j: number) {
    if (i < colSize && i >= 0 && j < rowSize && j >= 0 && board[i][j] === "O") {
      board[i][j] = "T";
      for (const movement of movements) {
        capture(board, i + movement[0], j + movement[1]);
      }
    }
  }

  for (let i = 0; i < colSize; i++) {
    for (let j = 0; j < rowSize; j++)
      if ([0, rowSize - 1].includes(j) || [0, colSize - 1].includes(i)) {
        if (board[i][j] === "O") capture(board, i, j);
      }
  }

  for (let i = 0; i < colSize; i++) {
    for (let j = 0; j < rowSize; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "T") {
        board[i][j] = "O";
      }
    }
  }
}
