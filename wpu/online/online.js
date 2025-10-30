const http = require('http')
const fs = require('fs')

const file = fs.readFileSync('../wpu-app/data/contact.json')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  res.end(file)
})

server.listen(3000, 'localhost', undefined, () => {
  console.log('server was running on')
})
