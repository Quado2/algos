function isValidSudoku(board: string[][]): boolean {
  const quadrantStringMap = new Map<string, string>();
  quadrantStringMap.set("0", "1");
  quadrantStringMap.set("1", "1");
  quadrantStringMap.set("2", "1");
  quadrantStringMap.set("3", "2");
  quadrantStringMap.set("4", "2");
  quadrantStringMap.set("5", "2");
  quadrantStringMap.set("6", "3");
  quadrantStringMap.set("7", "3");
  quadrantStringMap.set("8", "3");

  const xLength = board[0].length;
  const yLength = board.length;

  const valuesMap = new Map<string, Set<string>>();

  function getQuadrantName(x: number, y: number) {
    return `q_${quadrantStringMap.get(x?.toString())}${quadrantStringMap.get(
      y.toString()
    )}`;
  }

  function validateNumber(mapItemName: string, value: string) {
    let isValid = true;
    const set = valuesMap.get(mapItemName);
    if (!set) {
      const newSet = new Set<string>();
      newSet.add(value);
      valuesMap.set(mapItemName, newSet);
    } else {
      if (set.has(value)) {
        isValid = false;
      } else {
        set.add(value);
      }
    }

    return isValid;
  }

  let isValidSudoku = true;
  let result: boolean;

  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {
      const value = board[y][x];
      if (value !== ".") {
        //Row Check
        result = validateNumber("row_" + x, value);
        isValidSudoku = result ? isValidSudoku : result;

        //Column Check
        result = validateNumber("col_" + y, value);
        isValidSudoku = result ? isValidSudoku : result;

        //Quadrant Check
        const quadrantName = getQuadrantName(x, y);
        result = validateNumber(quadrantName, value);
        isValidSudoku = result ? isValidSudoku : result;
      }
    }
  }

  return isValidSudoku;
}
