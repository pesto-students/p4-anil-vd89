const BinarySearchTree = require("../lib")

const _head1Arr = [3, 9, 20, null, null, 15, 7]
const head1 = new BinarySearchTree()
head1.createTree(_head1Arr)

const _head2Arr = [1]
const head2 = new BinarySearchTree()
head2.createTree(_head2Arr)

const _head3Arr = []
const head3 = new BinarySearchTree()
head3.createTree(_head3Arr)

for (const head of [head1, head2, head3]) {
  console.log("level order: ", head.levelOrder());
}

/*
level order: [[3], [9, 20], [15, 7]]
level order: [[1]]
level order: []
 */