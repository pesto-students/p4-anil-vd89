
function printNGE(_arr) {
  const _res = new Array().fill(0);
  const _stack = new Array().fill(0);
  if (!_arr || _arr.length < 1) {
    return _res;
  };
  for (let i = 0; i < _arr.length; i++) {
    while (_stack.length > 0 && _arr[_stack[_stack.length - 1]] < _arr[i]) {
      const small = _stack.pop();
      _res[small] = _arr[i];
    };
    _stack.push(i);
  }
  for (let i = 0; i < _arr.length; i++) {
    while (_stack.length > 0 && _arr[_stack[_stack.length - 1]] < _arr[i]) {
      const small = _stack.pop();
      _res[small] = _arr[i];
    };
  }
  const _rem = _stack.length;
  for (let i = 0; i < _rem; i++) {
    _res[_stack.pop()] = -1;
  }
  return _res;
}

const newArray = [1, 3, 2, 4];

console.log(printNGE(newArray)) // [ 3, 4, 4, -1 ]