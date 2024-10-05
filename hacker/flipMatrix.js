const testArray = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

function flipMatrix(matrix) {
  let sum = 0;
  const size = matrix.length;
  const n = size/2;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.max(Math.max(matrix[i][j], matrix[size - 1 - i][j]), Math.max(matrix[i][size-1-j], matrix[size-1-i][size-1-j]));
    }
  }
  return sum
}

const expectedVaalue = 414;

console.log(flipMatrix(testArray));
