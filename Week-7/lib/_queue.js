function Stack() {
  this.array = new Array().fill(0)
}
Stack.prototype.isEmpty = function () {
  return this.array.length = 0
}
Stack.prototype.push = function (_value) {
  return this.array.push(_value)
}
Stack.prototype.pop = function () {
  return this.array.pop()
}


function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

Queue.prototype.enqueue = function (_value) {
  return this.inbox.push(_value)
}

Queue.prototype.dequeue = function () {
  if (this.outbox.isEmpty()) {
    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop())
    }
  }
  this.outbox.pop()
}

Queue.prototype.peek = function () {
  if (this.inbox.array.length > 0) {
    return this.inbox.array[0]
  }
  return this.outbox.array[this.outbox.array.length - 1]
}
module.exports = Queue
