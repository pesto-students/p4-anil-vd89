
const BinarySearchTree = require("../lib");

const getDepth = (root) => {
  if (!root) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
};

const head1 = new BinarySearchTree()
head1.createTree([3, 9, 20, null, null, 15, 7])

const head2 = new BinarySearchTree()
head2.createTree([1, null, 2])

const head3 = new BinarySearchTree()
head3.createTree([2, 1, 3])


for (const head of [head1, head2, head3]) {
  head.viewTree()
  console.log("max depth: ", getDepth(head._root));
  console.log("\n==============================\n");
}