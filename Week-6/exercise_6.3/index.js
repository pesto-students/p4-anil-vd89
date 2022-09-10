const { log } = console;

// Function to swap two elements in an array
const swap = (_arr, _i, _j) => [_arr[_i], _arr[_j]] = [_arr[_j], _arr[_i]];

// Sort array function
const sortArr = (_arr) => {
  let _start = 0, _mid = 0, _pivot = 1, _end = _arr.length - 1;

  while (_mid <= _end) {
    if (_arr[_mid] < _pivot) {
      swap(_arr, _start, _mid);
      _start++;
      _mid++;
    } else if (_arr[_mid] > _pivot) {
      swap(_arr, _mid, _end);
      _end--;
    } else {
      _mid++;
    }
  };

  return _arr;
}
const newArr = [0, 2, 1, 2, 0];

log(sortArr(newArr)); // [0,0,1,2,2]