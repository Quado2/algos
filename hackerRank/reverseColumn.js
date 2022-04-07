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
