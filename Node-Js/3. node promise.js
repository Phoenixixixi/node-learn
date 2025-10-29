const { error } = require('console')

const fs = require('fs').promises

const promise1 = Promise.resolve('first result')
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve('second result'), 2000)
)
const promise3 = fs.readFile('myFile.txt', 'utf-8')

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results)
  })
  .catch((error) => console.log('error', error))

console.log('ending')
