import React, { useState } from 'react'
import Child from './components/Child'

function Parent(){
    const [Message, setMessage] = useState('')

    return (
        <div>
            <span>Parent Component</span>
            <br /><br />
            <span>Children in Parent Component</span>
            {/* Parent로부터 props를 받은 Child 컴포넌트 */}
            <Child message="hi" />
            {/* Parnet로부터 props를 변수로 받은 Child 컴포넌트 */}
            <Child message={Message} />
            {/* Parent로부터 props를 받지 않은 Child 컴포넌트 */}
            <Child />

            {/* 버튼을 클릭하면 Message가 바뀌기 때문에 두번째 child 컴포넌트의 props도 변경된다 */}
            <button onClick={() => setMessage('clicked')}>클릭</button>
        </div>
    )
}

export default Parent