const http = require('http')

let io

function createServer(app) {
  const server = http.createServer(app)
  io = require('socket.io')(server, {
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

  io.of('/').adapter.on('create-room', (room) => {
    console.log(`room ${room} is created`)
  })

  io.of('/').adapter.on('delete-room', (room) => {
    console.log(`room ${room} is deleted`)
  })

  io.of('/').adapter.on('join-room', (room, id) => {
    console.log(`socket ${id} has joined room ${room}`)
  })

  io.of('/').adapter.on('leave-room', (room, id) => {
    console.log(`socket ${id} left room ${room}`)
  })

  return server
}

function closeSocket() {
  io.removeAllListeners()
}

module.exports = { createServer, closeSocket }
