import React, { useState } from 'react'

// 부모가 준 변수들을 props로 받으면 된다
function Counter(props){
    const [count, setCount] = useState(0)
    const clickString = props.click || 'Click'

    const increment = () =>{
        setCount(count + 2)
    }

    return (
        <div>
            <button onClick={increment}>{clickString} {count}</button>
        </div>
    )
}

export default Counter