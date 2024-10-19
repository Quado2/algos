function rotate(matrix: number[][]) {
  let xLength = matrix[0].length;
  let yLength = matrix.length;
  let result: number[] = [];
  // const result: number[][] = ;

  for (let x = 0; x < xLength; x++) {
    for (let y = yLength - 1; y >= 0; y--) {
      result.push(matrix[y][x]);
    }
  }

  for (let i = 0; i < xLength * yLength; i++) {
    const y = Math.floor(i / yLength);
    const x = i % yLength;
    console.log({ x, y });
    matrix[y][x] = result[i];
  }

}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
