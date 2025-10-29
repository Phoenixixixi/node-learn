const fs = require('fs')

console.log('starting synchronus read ...')
const data = fs.readFileSync('myFile.txt', 'utf-8')
console.log('file content: ', data)
console.log('ending of read')

console.log('>>>>>>>>>>>>><<<<<<<<<<<')
console.log('starting asynchronus read ...')
fs.readFile('myFile.txt', 'utf-8', (err, data) => {
  if (err) throw err
  console.log('file content : ', data)
})

console.log('ending async read')
