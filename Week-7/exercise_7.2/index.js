const SinglyLinkedList = require('../lib/_linkedList');

const newSll = [2, 4, 7, 8, 9]
const newSingleLinked = new SinglyLinkedList()
newSingleLinked.create(newSll)
newSingleLinked.rotate(3)
newSingleLinked.traverse() // 8 9 2 4 7 

const _exp2 = [1, 2, 3, 4, 5, 6, 7, 8]
const exp2SingleLl = new SinglyLinkedList()
exp2SingleLl.create(_exp2)
exp2SingleLl.rotate(4)
exp2SingleLl.traverse() // 5 6 7 8 1 2 3 4