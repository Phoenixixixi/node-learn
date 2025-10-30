const contacts = require('./contacts')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

// SATU instance saja:
yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'menambahkan item baru',
    builder: {
      nama: { describe: 'nama lengkap', demandOption: true, type: 'string' },
      email: { describe: 'email', demandOption: false, type: 'string' },
      hp: { describe: 'nomor HP', demandOption: true, type: 'string' }, // gunakan 'hp' kecil
    },
    handler(argv) {
      const { nama, email, hp } = argv
      console.log({ nama, email, hp })

      contacts.simpanContact(nama, email, hp)
    },
  })
  .command({
    command: 'list',
    describe: 'menampilkan semua nama dan contact',
    handler() {
      contacts.listContact()
    },
  })
  .command({
    command: 'detail',
    describe: 'menampilkan detail contact berdasarkan nama',
    builder: {
      nama: { describe: 'nama lengkap', demandOption: true, type: 'string' },
    },
    handler(argv) {
      contacts.detailContact(argv.nama)
    },
  })
  .command({
    command: 'delete',
    describe: 'menghapus contact berdasarkan nama',
    builder: {
      nama: { describe: 'nama lengkap', demandOption: true, type: 'string' },
    },
    handler(argv) {
      contacts.deleteContact(argv.nama)
    },
  })
  .demandCommand()
  .strict() // opsional: error kalau command/option tidak dikenal
  .parse()
