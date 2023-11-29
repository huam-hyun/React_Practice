import { useEffect, useState } from "react"

import { io } from "socket.io-client"
import isDev from 'isdev'

function App() {
  const [socket, setSocket] = useState()
  const [isConnected, setIsConnected] = useState(false)
  const [recentMessage, setRecentMessage] = useState('')

  const handleButtonClick1 = () => {
    socket?.emit('message', { message: '메시지 전송' })
  }

  useEffect(() => {
    const socket = io.connect(isDev
      ? 'http://localhost:3001'
      : process.env.REACT_APP_SERVER_URL
    )
    // socket 이벤트에 사용할 핸들러 함수들
    const handleSocketConnect = () => {
      console.log('socket 연결')
      setIsConnected(true)
    }
    const handleSocketDisconnect = () => {
      console.log('socket 연결 해제')
      setIsConnected(false)
    }
    const handleMessageReceive = (data) => {
      console.log('message receive', data)
      setRecentMessage(data.message)
    }

    if (socket) {
      setSocket(socket)
      socket.on('connected', handleSocketConnect)
      socket.on('disconnect', handleSocketDisconnect)
      socket.on('receive_message', handleMessageReceive)
    }

    return () => {
      if (socket) {
        socket.disconnect()
        socket.off('connected', handleSocketConnect)
        socket.off('disconnect', handleSocketDisconnect)
        socket.off('receive_message', handleMessageReceive)
      }
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        socket 연습
      </header>
      <section>
        <h1>현재 상태</h1>
        <div>연결상태: {isConnected}</div>
        <div>최근 메세지: {recentMessage}</div>
      </section>
      <section>
        <h1>기본적인 메시지 전송</h1>
        <button onClick={handleButtonClick1}>메시지 전송</button>
      </section>
    </div>
  );
}

export default App;
