import React, { useEffect, useState } from 'react'

function UseEffect(){
    const [count, setCount] = useState(0)
    const [temp, setTemp] = useState(0)

    // 컴포넌트가 rerendering 될 때마다 호출된다
    // useEffect의 두번재 인자로 내가 원하는 변수를 넣어주면 해당 변수가 바뀔때만 useEffect가 호출된다
    useEffect(() =>{
        console.log(count)
    }, [count, temp])

    // 한번만 실행하고 싶다면 두번째 인자로 빈 배열을 넣어주면 된다
    useEffect(() =>{
        console.log('first rendering')
    }, [])

    const increment = () =>{
        setCount(count + 1)
    }

    return (
        <div>
            <h1>useEffect 사용해보기</h1>
            <button onClick={increment}>Click</button>
            <button onClick={() => setTemp(temp + 1)}>tempClick</button>
        </div>
    )
}

export default UseEffect