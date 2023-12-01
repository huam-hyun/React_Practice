const express = require('express')
const cors = require('cors')

const { createServer, closeSocket,  } = require('./createServer')
const app = express()

app.use(cors())

const server = createServer(app)

server.listen(3001, () => {
  console.log('Server is running')
})

server.close((err) => {
  if (err) {
    console.error(err)
  }

  closeSocket()
})
