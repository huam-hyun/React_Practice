import { sendSocketMessage } from "./socket/socket"

function App() {
  const sendMessage = () => {
    sendSocketMessage('첫 메시지!')
  }

  return (
    <div className="App">
      <header className="App-header">
        socket 연습
      </header>
      <section>
        <h1></h1>
        <button onClick={sendMessage}>메시지 전송</button>
      </section>
    </div>
  );
}

export default App;
