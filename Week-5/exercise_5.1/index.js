
import fetch from 'node-fetch'
import { log, error } from 'console'

async function* fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  yield await response.json();
}

const result = async () => {
  try {
    let names = new Set();
    const it = fetchUsers()
    const { value } = await it.next()
    for (const element of value) {
      if (element.hasOwnProperty('name')) {
        names.add(element.name)
      }
    }
    const result = names.values()
    log(result)
  } catch (err) {
    error(err)
  }
}

result()

/* 
  Getting the iteration using set 
  the output 
[Set Iterator] {
  'Leanne Graham',
  'Ervin Howell',
  'Clementine Bauch',
  'Patricia Lebsack',
  'Chelsey Dietrich',
  'Mrs. Dennis Schulist',
  'Kurtis Weissnat',
  'Nicholas Runolfsdottir V',
  'Glenna Reichert',
  'Clementina DuBuque'
}

*/