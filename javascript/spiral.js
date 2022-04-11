function spiralTraverse(matrix) {
  let sortedResult = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    const result = [];
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(matrix[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(matrix[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
    result.sort((a,b) => a - b);
    sortedResult.push(result)
  }

  startRow = 0;
  endRow = matrix.length - 1;
  startCol = 0;
  endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    let currentResult = sortedResult.shift();
    for (let col = startCol; col <= endCol; col++) {
      (matrix[startRow][col] = currentResult.shift());
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      (matrix[row][endCol] = currentResult.shift());
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      (matrix[endRow][col] = currentResult.shift());
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      (matrix[row][startCol] = currentResult.shift());
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return matrix
}