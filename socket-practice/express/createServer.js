const http = require('http')
const isDev = require('isdev')

function createServer(app) {
  const server = http.createServer(app)
  const io = require('socket.io')(server, {
    cors: {
      origin: isDev
        ? 'http://localhost:3000'
        : process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  })

  io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on('message', (data) => {
      console.log(data)
      socket.broadcast.emit('receive_message', data)
    })
  })

  return server
}

module.exports = { createServer }
