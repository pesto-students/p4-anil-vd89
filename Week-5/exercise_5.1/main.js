import fetch from 'node-fetch'
import { log, error } from 'console'


const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
}

const result = async () => {
  try {
    let names = new Set();
    const value = await getUsers()

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
The async and await method 

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
} */