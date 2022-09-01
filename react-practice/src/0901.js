import React, {useState} from 'react'
import './0901.css'

function Practice1(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // 이벤트의 첫 인자는 항상 event객체
    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(username, password)
    }

    return (
        <div>
            <form onSubmit="onSubmit">
                <input
                    placeholder='Username'
                    value={username}
                    // onChange 이벤트를 통해 이벤트가 발생할 때마다 setUsername을 호출하여 username을 변경 가능하도록 함
                    onChange={(e) => setUsername(e.target.value)}
                /><br />
                <input
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button onClick={onSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Practice1