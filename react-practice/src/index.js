import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Practice1 from './0901.js'
import UseEffect from './UseEffect.js'
import Parent from './Parent.js'
import Condition from './Condition.js'
import Loop from './Loop.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // root.render에는 하나의 인자만 들어갈 수 있다
  // <App />,
  // <Practice1 />,
  // <UseEffect />
  // <Parent />
  // <Condition />
  <Loop />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
