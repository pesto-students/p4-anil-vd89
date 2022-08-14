const { log, error } = require('console')

const getNumber = new Promise((resolve, reject) => {
  const randomNumber = parseInt(Math.random() * 100, 10)
  log('Random Number ->> ', randomNumber)
  setTimeout(() => {
    if (randomNumber % 5 === 0) {
      reject(`Rejected with num: ${randomNumber}`);
    }
    resolve(`Resolved with num: ${randomNumber}`);
  }, 300);
})

const newGenNum = getNumber

newGenNum.then((result) => {
  log(result)
}).catch((err) => {
  error(err)
});

/* 
Random Number ->>  35
Rejected with num: 35
*/

/* 
Random Number ->>  31
Resolved with num: 31
*/