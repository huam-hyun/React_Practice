export const connectSocketEvent = (socket) => {
  socket.on('connected', () => {
    console.log('connected!')
    socket.emit('message', { message: 'Hello world!' })
  })

  socket.on('receive_message', (data) => {
    console.log('receive_message', data)
  })
}