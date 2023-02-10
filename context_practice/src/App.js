import { useState } from 'react';

import { dataContext } from './data-context';
import Child from './Child';

import './App.css'


function App() {
  const [context, setContext] = useState(0)
  const setCount = (count) => {
    setContext(count)
  }

  return (
    <div className="App">
      <dataContext.Provider value={{}}>
        app
        <Child />
      </dataContext.Provider>
    </div>
  );
}

export default App;
