
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

SinglyLinkedList.prototype.reverse = function () {
  let _prev = null, _current = this.head, after = null;
  while (_current.next !== null) {
    after = _current.next;
    _current.next = _prev;
    _prev = _current;
    _current = after;
  }
  _current.next = _prev;
  this.head = _current;
}


let arr = [1,2,3,4,5,6,7]
const newSll = new SinglyLinkedList()
newSll.create(arr)
newSll.reverse() // reverse the List 
newSll.traverse() // Present the list 
