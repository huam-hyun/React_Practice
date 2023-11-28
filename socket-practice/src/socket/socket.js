import { io } from "socket.io-client"

const initClientSocket = () => {
  const socket = io.connect('http://localhost:3001')

  socket.on('connected', () => {
    console.log('connected!')
    socket.emit('message', { message: 'Hello world!' })
  })

  socket.on('receive_message', (data) => {
    console.log('receive_message', data)
  })

  return socket
}

export const socket = initClientSocket()

export const sendSocketMessage = (message) => {
  socket.emit('message', { message })
}
