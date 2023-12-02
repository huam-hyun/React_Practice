import { sendSocketMessage, MESSAGE_TYPE } from "./socket/socket"

function App() {
  const sendMessage = () => {
    sendSocketMessage(MESSAGE_TYPE.GLOBAL, { message: 'Hello World' })
  }

  return (
    <div className="App">
      <header className="App-header">
        socket 연습
      </header>
      <section>
        <button onClick={sendMessage}>메시지 전송</button>
      </section>
    </div>
  );
}

export default App;
