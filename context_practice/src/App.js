import Sample1 from './Sample1'
import Sample2 from './Sample2'
import Sample3 from './Sample3'
import Sample4 from './Sample4'
import Sample5 from './Sample5'

function App() {
  return (
    <div className="App">
      Sample1
      <Sample1 />
      <hr />
      ContextAPI only and change in Component
      <Sample2 />
      <hr />
      ContextAPI only and change in Provider
      <Sample3 />
      <hr />
      ContextAPI only and divide value and action
      <Sample4 />
      <hr />
      ContextAPI with useReducer
      <Sample5 />
    </div>
  );
}

export default App