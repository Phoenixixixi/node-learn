const { error } = require('console')
const fs = require('fs')

// try {
//   fs.writeFileSync('data/test.txt', 'hello world from fs secara synchronus')
// } catch (error) {
//   console.error(error)
// }

//menuliskan string ke file secara asynchronus

// fs.writeFile('data/test.txt', 'hello world dari asynchronus', (err) => {
//   console.log(err)
// })

//membaca isi file secara synchronus

// const read = fs.readFileSync('data/test.txt', 'utf-8')

// console.log(read)

//membaca isi file secara asynchronus

// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//   if (err) throw new Error()
//   console.log(data)
// })

// ========================================================
//readline

const readline = require('readline')
const { json } = require('stream/consumers')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('hallo nama kamu siapa : ', (nama) => {
  rl.question('berapa nama nomor hape kamu : ', (HP) => {
    const contact = { nama, HP }
    const file = fs.readFileSync('./data/contact.json', 'utf-8')
    const contacts = JSON.parse(file)

    contacts.push(contact)
    console.log(contacts)

    fs, fs.writeFileSync('data/contact.json', JSON.stringify(contacts))

    console.log('terimakasih telah memasukan data diri anda')

    rl.close()
  })
})
