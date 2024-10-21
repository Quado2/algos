/**
 Do not return anything, modify matrix in-place instead.
 */
 function setMatrixZeroes(matrix: number[][]): void {
  const yLength = matrix.length;
  const xLength = matrix[0].length;
  const xZeroPositions = new Set<number>();
  const yZeroPositions = new Set<number>();

  for (let y = 0; y < yLength; y ++ ) {
      for(let x = 0; x< xLength; x++) {
          if(matrix[y][x]  === 0) {
              xZeroPositions.add(x)
              yZeroPositions.add(y)
          }
      }
  }

  for (let y = 0; y < yLength; y ++ ) {
      for(let x = 0; x< xLength; x++) {
          if(xZeroPositions.has(x) || yZeroPositions.has(y)) matrix[y][x] = 0
      }
  }
};

