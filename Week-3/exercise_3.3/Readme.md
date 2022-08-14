
## Exercise 3.3:
1. What is the output of the below problem and why: [30min]

```
function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement()
    
increment();
increment();
increment();
log();// What is logged? 

```

### Guidelines:
1. The candidate should be able to explain the code with the desired output.
### Outcome:
1. The candidates will understand how ‘closure’ works in JS.
2. The candidates will understand how ‘encapsulation’ works in JS.


### Out put 
log() a closure that  the message variable.
console.log(message) 
 - So that's why 'Count is 0' to the console.
 - if we do increment many time then we get always a 'Count is 0'
  