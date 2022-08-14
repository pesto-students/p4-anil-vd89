## Exercise 3.4 
- Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope: (2-3 hours)

```
function createStack() {
  return {
    items:[],
    push(item) {
      this.items.push(item);
      },
    pop() {
      return this.items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  stack.items; // => [10]
  stack.items= [10,100,1000]; //Encapsulation broken!
  
  function createStack() {
    // Write your code here...
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  stack.items;// => undefined


```

### Guidelines:
2. The candidate should be able to refactor the code and get the desired output.
3. The candidate should be able to explain the code why it was not working before.
4. The candidate should be able to explain the code why it is working now.

### Outcome:
3. The candidates will understand how ‘closure’ works in JS.
4. The candidates will understand how ‘encapsulation’ works in JS.
