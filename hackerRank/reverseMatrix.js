let inputMatrix = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7],
  [2, 6, 3],
];
console.log(inputMatrix);

function reverseColumn(matrix, col) {
  const size = matrix.length;
  let start = 0;
  let end = size - 1;
  while (end > start) {
    let temp = matrix[start][col];
    matrix[start][col] = matrix[end][col];
    matrix[end][col] = temp;
    start++;
    end--;
  }
  return matrix;
}

console.log(reverseColumn(inputMatrix, 2));
