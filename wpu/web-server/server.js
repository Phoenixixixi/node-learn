const http = require('http')
const fs = require('fs')

const PORT = 3002

const renderHtml = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.write('404 - File not found')
      return res.end()
    }

    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
}

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Ini halaman ABOUT</h1>')
    return res.end()
  }

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Ini halaman UTAMA</h1>')
    return res.end()
  }

  // 404 untuk halaman lain
  renderHtml('./404.html', res)
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
