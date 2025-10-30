const chalk = require('chalk')
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

const loadContact = () => {
  const file = fs.readFileSync('./data/contact.json', 'utf-8')
  const contacts = JSON.parse(file)
  return contacts
}

const simpanContact = (nama, HP, email) => {
  const contact = { nama, HP, email }
  const contacts = loadContact()

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

const listContact = () => {
  const contacts = loadContact()
  contacts.map((contact, index) =>
    console.log(`${index + 1} - ${contact.nama} - ${contact.HP}`)
  )
}

const detailContact = (nama) => {
  const contacs = loadContact()
  const contact = contacs.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  )
  if (!contact) {
    console.log(chalk.red('nama tidak ditemukan'))
    return false
  }
  console.log(`detail : ${contact.nama} ${contact.HP} ${contact.email}`)
}

const deleteContact = (nama) => {
  const contacs = loadContact()
  const newContact = contacs.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  )

  if (contacs.length === newContact.length) {
    console.log(chalk.red('nama tidak ditemukan'))
    return false
  }
  fs.writeFileSync('data/contact.json', JSON.stringify(newContact))

  console.log(`${nama} berhasil dihapus`)
}

module.exports = {
  tulisPertanyaan,
  simpanContact,
  listContact,
  detailContact,
  deleteContact,
}
