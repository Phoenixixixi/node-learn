// const { rejects } = require('assert')
// const { error } = require('console')
// let http = require('http')
// const { resolve } = require('path')

// const webConnect = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   res.end('hello world')
// })
// webConnect.listen(8080, () => {
//   console.log('server was running')
// })

let data = false

const checking = new Promise((resolve, reject) => {
  if (data) {
    resolve('datanya tersedia')
  } else {
    reject('data tidak tesedia')
  }
})

checking
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: 'dustin' }), 1000)
  })
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 101, title: 'belajar async js', userId },
          { id: 102, title: 'belajar node js', userId },
        ]),
      2000
    )
  })
}

function getComment(postId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['sangat membantu sekali']), 4000)
  })
}

async function main() {
  try {
    console.log('mulai mengambil data')
    const user = await getUser()
    const posts = await getPosts(user.id)
    console.log('ini pertengahan')
    const comment = await getComment(posts[1].id)

    console.log('user anda : ', user)
    console.log('postingan anda : ', posts)
    console.log('komen kedua anda : ', comment)
  } catch (err) {
    console.error('error : ', err)
  }
}

main()
