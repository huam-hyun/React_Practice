import './App.css';
import React, {useState} from 'react'

function App() {
  // vuex의 state, mutation과 비슷해보인다
  const [text, setText] = useState('1st Message')
  
  const onSubmit = () =>{
    alert('submitted')
  }

  const onKeyUp = (event) =>{
    // keyCode 13은 엔터이다.
    if(event.keyCode === 13){
      onSubmit();
    }
    console.log('key up')
  }

  // text를 수정하는 함수
  const updateText = () =>{
    setText('2nd Message')
    // 그래도 여전히 text는 '1st Message'가 출력된다
  }
  return (
    <div className="App">
      {/* onKeyUp이벤트는 키를 떼는 순간에 발생한다. 누르고 있으면 발생하지 않는다. */}
      <input onKeyUp={onKeyUp}/>

      {/* 이벤트에는 항상 함수가 들어가도록 해야한다. 함수가 아닐 경우 바로 실행됨 */}
      <button onClick={onSubmit}>Submit</button>

      <br /><br />

      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default App;
