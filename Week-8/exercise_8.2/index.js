const BinarySearchTree = require("../lib");


const _head1Arr = [2, 1, 3]
const head1 = new BinarySearchTree()
head1.createTree(_head1Arr)
head1.isBinaryTree()

console.log('head1', head1.viewTree());
console.log(' head1 is valid', head1.isBinaryTree());

const _head2Arr = [5, 1, 4, null, null, 3, 6]
const head2 = new BinarySearchTree()
head2.createTree(_head2Arr)

console.log('head2', head2.viewTree());
console.log('head 2 is valid', head2.isBinaryTree());