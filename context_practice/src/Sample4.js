// 2, 3번 예제에서 발생할 수 있는 문제는 context가 업데이트 될 때마다 필요없는 컴포넌트의 재렌더링이 일어난다는 것이다.
// 해당 문제를 해결하기 위해서는 하나의 context를 또 만들면 된다
// 하나는 값을 전달하고, 하나는 변경하기 위한 함수들을 전달하면 된다

import React, { useContext, useMemo, createContext } from "react"

const counterValueContext = createContext()
const counterActionsContext = createContext()

const CounterProvider = ({children}) => {
    const [counter, setCounter] = React.useState(1)
    const actions = useMemo(() => ({
        increase: () => {
            setCounter(prev => prev + 1)
        },
        decrease: () => {
            setCounter(prev => prev - 1)
        }
    }), [])

    return (
        <counterValueContext.Provider value={counter}>
            <counterActionsContext.Provider value={actions}>
                {children}
            </counterActionsContext.Provider>
        </counterValueContext.Provider>
    )
}

const useCounterValue = () => {
    const value = useContext(counterValueContext)

    if(value === undefined){
        throw new Error('useCounterValue should be used within CounterProvider')
    }

    return value
}

const useCounterActions = () => {
    const actions = useContext(counterActionsContext)

    if(actions === undefined) {
        throw new Error('useCounterActions should be used within CounterProvider')
    }

    return actions
}

function Value() {
    const counter = useCounterValue();
    return <h1>{counter}</h1>;
  }
  function Buttons() {
    const actions = useCounterActions();
  
    return (
      <div>
        <button onClick={actions.increase}>+</button>
        <button onClick={actions.decrease}>-</button>
      </div>
    );
  }

const Sample4 = () => {

    return (
        <div>
            <CounterProvider>
                <Value />
                <Buttons />
            </CounterProvider>
        </div>
    )
}

export default Sample4