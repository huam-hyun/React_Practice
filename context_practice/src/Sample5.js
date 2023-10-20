// ContextAPI는 useReducer와 자주 같이 쓰이는 것 같다.
// 찾아보니 해당 관련 예제들이 많이 있어서 한번 해보려고 한다

import React, { createContext, useContext, useMemo, useReducer } from "react";

const INCREASE = 'increase'
const DECREASE = 'decrease'

const CounterContext = createContext()

const counterReducer = (state, action) => {
    switch(action.type){
        case INCREASE:
            return {count: state.count + 1}
        case DECREASE:
            return {count: state.count - 1}
        default:
            return state
    }
}

const CounterProvider = ({children}) => {
    const [state, dispatch] = useReducer(counterReducer, {count: 1})

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

const Value = () => {
    const {state} = useContext(CounterContext)
    const count = useMemo(() => state.count, [state])

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

const Buttons = () => {
    const {dispatch} = useContext(CounterContext)

    const handleIncrease = () => {
        dispatch({type: INCREASE})
    }

    const handleDecrease = () => {
        dispatch({type: DECREASE})
    }

    return (
        <div>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

const Sample5 = () => {
    return (
        <div>
            <CounterProvider>
                <Value />
                <Buttons />
            </CounterProvider>
        </div>
    )
}

export default Sample5