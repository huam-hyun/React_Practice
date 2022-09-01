import React, { useEffect, useState } from 'react'
import Counter from './Counter'

function UseEffect(){
    // const [count, setCount] = useState(0)
    // const [temp, setTemp] = useState(0)

    // 컴포넌트가 rerendering 될 때마다 호출된다
    // useEffect의 두번재 인자로 내가 원하는 변수를 넣어주면 해당 변수가 바뀔때만 useEffect가 호출된다
    // useEffect(() =>{
    //     console.log(count)
    // }, [count, temp])

    // 한번만 실행하고 싶다면 두번째 인자로 빈 배열을 넣어주면 된다
    useEffect(() =>{
        console.log('first rendering')
    }, [])

    // const increment = () =>{
    //     setCount(count + 1)
    // }

    return (
        <div>
            <h1>useEffect 사용해보기</h1>
            {/* <button onClick={increment}>Click</button>
            <button onClick={() => setTemp(temp + 1)}>tempClick</button> */}

            {/* import를 사용하여 Counter.js를 컴포넌트로 가져와서 사용함 */}
            {/* 같은 역할을 하는 컴포넌트가 여러개라면 하나로 만들어 import후 사용하면 편리함 */}
            <Counter />
            <Counter />
        </div>
    )
}

export default UseEffect