const { log } = console;

const hasDifference = (_arr, _diff) => {
  for (let i = 0; i < _arr.length - 1; i++) {
    let findNum = _arr[i] + _diff;
    for (let j = i + 1; j < _arr.length; j++) {
      if (_arr[j] === findNum)
        return 1;
    }
  }

  return 0;
}
const A = [5, 20, 3, 2, 50, 80], B = 78
console.log(hasDifference(A, B))