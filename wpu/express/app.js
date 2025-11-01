const express = require('express')
const app = express()
const path = require('path')
const PORT = 3003

//gunakan ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.sendFile('./public/about.html', { root: __dirname })
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
  res.sendFile('./public/404.html', { root: __dirname })
})

app.listen(PORT, () => {
  console.log('server was running on : ', PORT)
})
