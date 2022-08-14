//  create memory function 

const { log, time,timeEnd } = require('console')

const memorize = (_func) => {
  const cache = new Map()
  return (...args) => {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, _func(...args));
    log(`Printing Cache`, cache);
    return cache.get(key);
  }
}

const add = (a, b) => {
  log(`Function called for Operation ${a + b}`)
  return a + b
}

const memorizeAdd = memorize(add)
time("process_1");
memorizeAdd(100,200);
timeEnd("process_1");
time("process_2");
memorizeAdd(100,100);
timeEnd("process_2");
time("process_3");
memorizeAdd(100,100);
timeEnd("process_3");
time("process_4");
memorizeAdd(100,200);
timeEnd("process_4");

/* 
Function called for Operation 300
Printing Cache Map(1) { '100,200' => 300 }
process_1: 5.239ms
Function called for Operation 200
Printing Cache Map(2) { '100,200' => 300, '100,100' => 200 }
process_2: 0.304ms
process_3: 0.015ms
process_4: 0.008ms
*/