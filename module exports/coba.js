function cetakNama(nama) {
  return console.log(`hallo nama anda ${nama}`)
}

const PI = 3.14

const mahasiswa = {
  nama: 'budi',
  umur: 19,
  cetakMahasiswa() {
    return `hallo nama saya adalah ${this.nama} dan umur saya ${this.umur}`
  },
}

class Orang {
  constructor() {
    console.log('object orang telah dibuat')
  }
}

// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mahasiswa = mahasiwa
// module.exports.orang = Orang

//atau

module.exports = { cetakNama, PI, mahasiswa, Orang }
