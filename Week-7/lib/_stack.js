function Stack(_array) {
  this.array = [];
  if (_array) {
    this.array = _array
  }
}

// getBuffer 
Stack.prototype.getBuffer = function () {
  return this.array.slice()
}

Stack.prototype.isEmpty = function () {
  return this.array.length = 0
}
Stack.prototype.length = function () {
  return this.array.length
}

// peek 
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1]
}

// insert
Stack.prototype.insert = function (_value) {
  return this.array.push(_value)
}

// Deletion
Stack.prototype.remove = function () {
  return this.array.pop()
}

// Stack Search 
Stack.prototype.search = function (_element) {
  let _bufferArray = this.getBuffer()
  let _bufferStack = new Stack(_bufferArray);
  while (!_bufferStack.isEmpty()) {
    if (_bufferStack.remove() == _element) {
      return true
    }
    return false
  }
}

module.exports = Stack