function SinglyLinkedListNode(_value) {
  this.value = _value;
  this.next = null;
}
function SinglyLinkedList() {
  this.head = null
}
SinglyLinkedList.prototype.createLoop = function () {
  this.head.next.next.next
}

SinglyLinkedList.prototype.create = function (_arr) {
  this.head = new SinglyLinkedListNode(_arr[0])
  let _current = this.head
  for (let i = 1; i < _arr.length; ++i) {
    _current.next = new SinglyLinkedListNode(_arr[i]);
    _current = _current.next;
  }
}

SinglyLinkedList.prototype.traverse = function () {
  let _current = this.head;
  while (_current !== null) {
    console.log(_current.value);
    _current = _current.next;
  }
}

SinglyLinkedList.prototype.detectLoop = function (_head) {
  var _s = new Set();
  while (_head != null) {
    if (_s.has(_head)) {
      return true;
    }
    _s.add(_head);
    _head = _head.next;
  }
  return false;
}

const newArr = [1, 3, 4]
const newSLL = new SinglyLinkedList()
newSLL.create(newArr)
// newSLL.createLoop()
newSLL.head.next.next

console.log(newSLL.detectLoop(1))
newSLL.traverse()
