const contacts = require('./contacts')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const { tulisPertanyaan, simpanContact } = contacts

// const { tulisPertanyaan, simpanContact } = contacts

// const main = async () => {
//   const nama = await tulisPertanyaan('masukkan nama anda : ')
//   const HP = await tulisPertanyaan('masukkan nomor anda : ')
//   const email = await tulisPertanyaan('masukkan email anda : ')

//   simpanContact(nama, email, HP)
// }

// main()

// versi modern
//lebih modern
yargs(hideBin(process.argv)) // ← ini penting banget!
  .command({
    command: 'add',
    describe: 'menambahkan item baru',
    builder: {
      nama: {
        describe: 'nama lengkap',
        demandOption: true,
        type: 'string',
      },
      email: {
        describe: 'email',
        demandOption: false,
        type: 'string',
      },
      Hp: {
        describe: 'Hp',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      const { nama, email, Hp } = argv
      const contact = {
        nama,
        email,
        Hp,
      }
      console.log(contact)
      simpanContact(nama, email, Hp)
    },
  })
  .parse()
