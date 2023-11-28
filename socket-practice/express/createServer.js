const http = require('http')

function createServer(app) {
  const server = http.createServer(app)
  const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
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
