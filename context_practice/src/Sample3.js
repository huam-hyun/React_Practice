// Sample2의 경우 컴포넌트에서 context값을 변경했다. 하지만 Provider에서 값을 변경하는 방법도 있다.
// Sample3은 Provider에서 값을 변경하는 예제다.

import React, { createContext, useMemo, useState, useContext } from "react"

const counterContext = createContext()

const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(1)
    const action = useMemo(
        () => ({
            increase: () => {
                setCounter(prev => prev + 1)
            },
            decrease: () => {
                setCounter(prev => prev - 1)
            }
        }), []
    )

    const value = useMemo(() => [counter, action], [counter, action])

    return (
        <counterContext.Provider value={value}>
            {children}
        </counterContext.Provider>
    )
}

const useCounter = () => {
    const value = useContext(counterContext)

    if(value === undefined) {
        throw new Error('useCounterState should be used within CounterProvider')
    }

    return value
}

function Sample3() {
    return (
      <CounterProvider>
        <div>
          <Value />
          <Buttons />
        </div>
      </CounterProvider>
    );
  }
  
  const Value = () => {
    const [counter] = useCounter();
    return <h1>{counter}</h1>;
  }
  
  const Buttons = () => {
    const [, actions] = useCounter();
  
    return (
      <div>
        <button onClick={actions.increase}>+</button>
        <button onClick={actions.decrease}>-</button>
      </div>
    )
  }
export default Sample3