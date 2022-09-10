const { log } = console;


const spiralOrder = (_arrMatrix, _m, _n) => {
  let rowStart = 0;
  let rowEnd = _m;
  let columnStart = 0;
  let columnEnd = _n;

  let result = []

  while (rowStart < rowEnd && columnStart < columnEnd) {
    for (let i = columnStart; i < columnEnd; i++) {
      result.push(_arrMatrix[rowStart][i])
    }
    rowStart++;

    for (let i = rowStart; i < rowEnd; i++) {
      result.push(_arrMatrix[i][columnEnd - 1])
    }
    columnEnd--;
    for (let i = columnEnd - 1; i >= columnStart; i--) {
      result.push(_arrMatrix[rowEnd - 1][i])
    }
    rowEnd--;
    for (let i = rowEnd - 1; i >= rowStart; i--) {
      result.push(_arrMatrix[i][columnStart])
    }
    columnStart++;

  }
  return result;
}

const arrMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const m = arrMatrix.length;
const n = arrMatrix[0].length;

log(spiralOrder(arrMatrix, m, n)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]