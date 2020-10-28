const http = require('http')
const fs = require('fs')

function rqListener(req, res) {}

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Your Name please.</title></head>')
    res.write(
      '<body><form action = "/message" method = "POST"><input name ="message" type="text"><button type = "submit">Send</button></form></body>',
    )
    res.write('</html>')
    return res.end()
    // res.write()
    // res.write()
    // res.write()
    // res.write()
  }
  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (dataChunk) => {
      body.push(dataChunk)
      console.log(body)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody)
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        res.writeHead(302, { Location: '/' })
        return res.end()
      })
    })
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>New Data! aha! Welcome to my Node Server!</h1>')
  res.end()
})

server.listen(3000)
