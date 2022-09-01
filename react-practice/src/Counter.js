import React, { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 2)
    }

    return (
        <div>
            <button onClick={increment}>Click {count}</button>
        </div>
    )
}

export default Counter