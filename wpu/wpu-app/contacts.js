const fs = require('fs')
const readline = require('readline')

//instalaton readline for command
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

//membuat folder data jika blm ada
if (!fs.existsSync('data')) {
  fs.mkdirSync('data')
}

//membuat file jika blm ada didalam folder data

if (!fs.existsSync('data/contact.json')) {
  fs.writeFileSync('data/contact.json', '[]')
}

// main function
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (value) => {
      resolve(value)
    })
  })
}

const simpanContact = (nama, HP, email) => {
  const contact = { nama, HP, email }
  const file = fs.readFileSync('./data/contact.json', 'utf-8')
  const contacts = JSON.parse(file)

  //cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama)
  if (duplikat) {
    console.log('contact sudah terdaftar, gunakan nama lain')
    return false
  }

  contacts.push(contact)
  console.log(contacts)

  fs, fs.writeFileSync('data/contact.json', JSON.stringify(contacts))

  console.log('terimakasih telah memasukan data diri anda')

  rl.close()
}

module.exports = { tulisPertanyaan, simpanContact }
