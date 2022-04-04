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

function calcMax(matrix) {
  //define a function to reverseColumn
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

  const size = matrix.length;
  const n = size / 2;

  //Check for collumn and  swap
  for (let i = 0; i < size; i++) {
    let topSum = 0;
    let bottomSum = 0;
    let start = 0;
    let end = size - 1;
    while (end > start) {
      topSum = topSum + matrix[i][start];
      bottomSum = bottomSum + matrix[i][end];
      start++;
      end--;
    }

    if (bottomSum > topSum) {
      matrix = reverseColumn(matrix, i);
    }
  }

  //check for rows and swap

  for (let i = 0; i < size; i++) {
    let topSum = 0;
    let bottomSum = 0;
    let start = 0;
    let end = size - 1;
    while (end > start) {
      topSum = topSum + matrix[start][i];
      bottomSum = bottomSum + matrix[end][i];
      start++;
      end--;
    }

    if (bottomSum > topSum) {
      matrix[i] = matrix[i].reverse();
    }
  }

  //sum the top matrix;
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      totalSum = totalSum + matrix[i][j];
    }
  }

  console.log(totalSum);
  return totalSum;
}

const testArray = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

const expectedVaalue = 414;
