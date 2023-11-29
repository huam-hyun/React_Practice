import { io } from "socket.io-client"
import { connectSocketEvent } from "./socketEvent"
import isDev from 'isdev'

const initClientSocket = () => {
  const socket = io.connect(isDev
    ? 'http://localhost:3001'
    : process.env.REACT_APP_SERVER_URL
  )

  connectSocketEvent(socket)

  return socket
}

export const socket = initClientSocket()

export const sendSocketMessage = (message) => {
  socket.emit('message', { message })
}

export const connectChannel = (channel) => {

}

export const disconnectChanne = (channel) => {

}
