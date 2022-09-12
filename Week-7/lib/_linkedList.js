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

SinglyLinkedList.prototype.rotate = function (_count) {
  let _prev = this.head;
  let _previousHead = this.head;
  let _current = this.head;
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
};


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

module.exports = SinglyLinkedList