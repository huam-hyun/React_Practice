// <Context.Provider> </Context.Provider>와 useContext로 값 공유하는 방법

import { useContext } from 'react';
import { dataContext } from './data-context';

function Sample1() {
  return (
    <div>
      <dataContext.Provider value={10}>
        <GrandParent />
      </dataContext.Provider>
    </div>
  );
}

function GrandParent() {
  return <Parent />
}

function Parent() {
  return <Child />
}

function Child() {
  return <GrandChild />
}

function GrandChild() {
  const value = useContext(dataContext)

  return (
    <div>
        {`<ContextProvider></ContextProvider>와 useContext로 값 공유하기`}
        <div>shared value: {value}</div>
    </div>
  )
}

export default Sample1
