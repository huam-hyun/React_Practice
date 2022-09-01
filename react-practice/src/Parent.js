import React, { useState } from 'react'
import Child from './components/Child'

function Parent(){
    

    return (
        <div>
            <span>Parent Component</span>
            <br /><br />
            <span>Children in Parent Component</span>
            {/* Parent로부터 props를 받은 Child 컴포넌트 */}
            <Child message="hi" />
            {/* Parent로부터 props를 받지 않은 Child 컴포넌트 */}
            <Child />
        </div>
    )
}

export default Parent