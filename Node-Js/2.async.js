//promise
const fs = require('fs').promises

console.log('start reading file')
fs.readFile('MyFile.txt', 'utf-8')
  .then((data) => {
    console.log('text from promise pattern : ', data)
  })
  .catch((err) => console.log('error : ', err))

console.log('ending')

//async wait

async function readMyFile() {
  try {
    console.log('start reading file with async/await')
    const data = await fs.readFile('MyFile.txt', 'utf-8')
    console.log('text from async/await pattern : ', data)
  } catch (err) {
    console.log('error : ', err)
  }
}

// Call the async function
readMyFile()
console.log('ending async/await')
