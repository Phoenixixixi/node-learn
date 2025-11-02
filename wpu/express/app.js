const express = require('express')
const app = express()
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const PORT = 3003

//gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
  const mahasiswa = [
    // {
    //   nama: 'budi',
    //   email: 'budi@gmail.com',
    // },
    // {
    //   nama: 'ujang',
    //   email: 'ujang@gmail.com',
    // },
  ]
  res.render('index', { nama: 'Dustin', title: 'Halaman Home', mahasiswa })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'halaman about' })
})
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'halaman contact' })
})
app.get('/contact', (req, res) => {
  res.send('hello world about')
})
app.use(express.static(path.join(__dirname, 'public')))

app.use('/product/:id/category/:category', (req, res) => {
  res.send(
    'producti ID : ' +
      req.params.id +
      'dengan category : ' +
      req.params.category +
      'dengan nama : ' +
      req.query.nama
  )
})

//404
app.use('/', (req, res) => {
  //   res.status(404)
  //   res.send('<h1>404</h1>')
  //   res.json({
  //     nama: 'dustin',
  //     email: 'dastin@gmail.com',
  //   })
  res.status(404)
  res.render('404')
})

app.listen(PORT, () => {
  console.log('server was running on : ', PORT)
})
