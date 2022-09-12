const Stack = require('../lib/_stack');

function isBracketBalanced(_expr) {
  let _stack = new Stack();
  for (let i = 0; i < _expr.length; i++) {
    const _x = _expr[i];
    if (_x == '(' || _x == '[' || _x == '{') {
      _stack.insert(_x)
      continue;
    }
    if (_stack.length == 0) {
      return false
    }
    let _check;
    switch (_x) {
      case ')':
        _check = _stack.remove()
        if (_check == '{' || _check == '[') {
          return false
        }
        break;
      case '}':
        _check = _stack.remove()
        if (_check == '(' || _check == '[') {
          return false
        }
        break;
      case ']':
        _check = _stack.remove()
        if (_check == '{' || _check == '(') {
          return false
        }
        break;
      default:
        break;
    }
  }
  return _stack.isEmpty
}
const expr = '{([}'
if (isBracketBalanced(expr)) {
  console.log(true)
} else {
  console.log(false);
}