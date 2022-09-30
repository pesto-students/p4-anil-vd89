function TreeNode(_value) {
  this.value = _value
  this.left = null
  this.right = null
}

function BinarySearchTree() {
  this._root = null
}

BinarySearchTree.prototype.createTree = function (_arr) {
  if (!_arr.length) return null;
  this._root = new TreeNode(_arr[0])
  const queue = [this._root]
  let i = 1
  while (queue.length && i < _arr.length) {
    const node = queue.shift();
    if (_arr[i]) {
      node.left = new TreeNode(_arr[i]);
      queue.push(node.left);
    }
    if (_arr[i + 1]) {
      node.right = new TreeNode(_arr[i + 1]);
      queue.push(node.right);
    }
    i += 2;
  }
  return this._root
}

BinarySearchTree.prototype.viewTree = function () {
  if (!this._root) return
  const queue = [this._root]
  while (queue.length) {
    const node = queue.shift()
    if (node) {
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

module.exports = BinarySearchTree