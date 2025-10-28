const contacts = require('./contacts')

const { tulisPertanyaan, simpanContact } = contacts

const main = async () => {
  const nama = await tulisPertanyaan('masukkan nama anda : ')
  const HP = await tulisPertanyaan('masukkan nomor anda : ')
  const email = await tulisPertanyaan('masukkan email anda : ')

  simpanContact(nama, email, HP)
}

main()
