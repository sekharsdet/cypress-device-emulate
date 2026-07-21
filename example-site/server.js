const http = require('http')
const fs = require('fs')
const path = require('path')

const page = fs.readFileSync(path.join(__dirname, 'index.html'))
const port = process.env.PORT || 4599

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(page)
  })
  .listen(port, () => console.log(`example-site listening on ${port}`))
