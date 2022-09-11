function SinglyLinkedListNode(_value) {
  this.value = _value;
  this.next = null;
}
function SinglyLinkedList() {
  this.head = null
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

SinglyLinkedList.prototype.rotate = function (_count) {
  let _prev = this.head,
    _previousHead = this.head,
    _current = this.head;
  let i = 1;
  while (_current.next) {
    if (i == _count + 1) {
      this.head = _current;
      _prev.next = null;
    }
    _prev = _current;
    _current = _current.next;
    i++
  }
  _current.next = _previousHead;
}

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