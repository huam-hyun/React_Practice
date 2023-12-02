import { io } from "socket.io-client"

export const MESSAGE_TYPE = {
  GLOBAL: 'global',
  DIRECT_MESSAGE: 'dm',
  ROOM: 'room',
}

export const socket = io.connect('http://localhost:3001')
// 소켓 이벤트 정의
socket.on('connected', () => {
  console.log('connected!')
  socket.emit('message', { message: 'Hello world!' })
})

socket.on('receive_message', (data) => {
  console.log('receive_message', data)
})
/**
 * 소켓 사용하는 함수 정의
 * @param {string} type
 * @param {object} payload
 * @param {string} payload.room
 * @param {number} payload.id
 * @param {string} payload.message
 */
export const sendSocketMessage = (type = MESSAGE_TYPE.GLOBAL, payload) => {
  // payload에 필요한 변수들은 알아서 추가할것
  const { room, id, message } = payload
  switch (type) {
    case MESSAGE_TYPE.GLOBAL:
      // 연결된 소켓으로 전송
      socket.emit('message', { message })
      break
    case MESSAGE_TYPE.DIRECT_MESSAGE:
      // 특정 소켓 id로 전송
      socket.to(id).emit('message', { message })
      break
    case MESSAGE_TYPE.ROOM:
      // 특정 room 으로 전송
      socket.to(room).emit('message', { message })
      break
    default:
  }
}

export const connectToRoom = (roomName) => {
  socket.join(roomName)
  socket.to(roomName).emit('message', { message: `socket ${socket.id} join room ${roomName}` })
}

export const leaveFromRoom = (roomName) => {
  socket.to(roomName).emit('message', { message: `socket ${socket.id} leave room ${roomName}` })
  socket.leave(roomName)
}
