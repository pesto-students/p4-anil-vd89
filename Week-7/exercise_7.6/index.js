const Queue = require('../lib/_queue');

let twoStackQueue = new Queue();

twoStackQueue.enqueue(1);
twoStackQueue.enqueue(2);
twoStackQueue.enqueue(2);
twoStackQueue.enqueue(2);
twoStackQueue.enqueue(1);
twoStackQueue.enqueue(4);
twoStackQueue.dequeue();

twoStackQueue.dequeue();
twoStackQueue.dequeue();


console.log(twoStackQueue.peek())
