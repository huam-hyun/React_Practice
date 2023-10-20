// 유동적인 값을 ContextAPI에서 사용하고 싶을 때 사용하는 방법 1
// CounterProvider라는 컴포넌트를 새로 만들어 안에 Provider와 value를 설정하고 Provider안에 children을 위치시킨다
// 값을 하나만 쓸 경우에는 state를 그대로 value에 넣어 state와 setState를 사용하면 된다
// Custom Hook을 만들어서 일일이 useContext를 쓸 필요 없이 useConterState()로 사용 가능하고 에러 처리도 가능하다


import React, {createContext, useContext} from "react"

const counterContext = createContext()

const CounterProvider = ({children}) => {
    // 필요한 기능을 이 안에 작성하면 된다.
    // 값이 하나인 경우 state를 그대로 value에 넣어주면 된다
    const counterState = React.useState(2)

    return (
        <counterContext.Provider value={counterState}>
            {children}
        </counterContext.Provider>
    )
}

// Custom Hook
const useCounterState = () => {
    const value = useContext(counterContext)

    if(value === undefined){
        throw new Error('useCounterState should be used within CounterProvider')
    }

    return value
}

const Sample2 = () => {

    return (
        <CounterProvider>
            <div>
                <Value />
                <Button />
            </div>
        </CounterProvider>
    )
}

const Value = () => {
    const [counter] = useCounterState()
    return <h1>{counter}</h1>
}

const Button = () => {
    const [, setCounter] = useCounterState()
    // useState의 setState에는 두 가지 사용법이 있다.
    // 1. 값을 넣으면 해당 값으로 state를 변경한다
    // 2. 함수를 넣으면 이전 state를 인자로 함수를 실행한 결과로 state를 변경한다
    const increase = () => setCounter(prev => prev + 1)
    const decrease = () => setCounter(prev => prev - 1)

    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Sample2