import React, { useState } from 'react'

function Condition(){
    const [condition, setCondition] = useState(false)
    const toggle = () => setCondition(!condition)
    const renderCondition = condition ? <div>True</div> : <div>False</div>
    return (
        <div>
            <h1>조건으로 렌더링하기</h1>
            {/* True, False에 의해 rendering 되는 것이 바뀜 */}
            {renderCondition}
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default Condition