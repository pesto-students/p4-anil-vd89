function createIncrement() {
    let count = 0;
    // console.log(count);  here count is 0
    function increment() {
        count++;
        /* console.log(count);
         here 1
              2
              3
     count is 0
        */
    }
let message = `Count is ${count}`; // count is 0 
function log() {
    console.log(message);          // message store the count value at the starting it initialize that value after not change, console.log(message,count); it show count is 0 3
}

return [increment, log];

}
const [increment, log] = createIncrement();
increment();       // the first increment increase the count value it print 1
increment();       // the first increment increase the count value it print 1
increment();       // the first increment increase the count value it print 1
log(); // What is logged?


/* log() a closure that  the message variable.
  console.log(message) So that's why 'Count is 0' to the console.
  if we do increment many time then we get always a 'Count is 0'

  */

