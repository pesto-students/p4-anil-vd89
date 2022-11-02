const SinglyLinkedList = require('../lib/_linkedList');

const newArr = [1, 3, 4]
const newSLL = new SinglyLinkedList()
newSLL.create(newArr)
// newSLL.createLoop()
newSLL.head.next.next

console.log(newSLL.detectLoop(1))
newSLL.traverse()
