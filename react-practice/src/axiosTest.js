import React, { useState } from 'react'
import axios from 'axios'

const AxiosTest = () =>{
    const [data, setData] = useState()

    const post = () =>{
        // axios({
        //     url: 'http://localhost:3000/test',
        //     data: {
        //         id: 1,
        //         id2: 2
        //     },
        //     method: 'POST'
        // }).then(res =>{
        //     console.log(data)
        //     setData(JSON.stringify(res.data))
        // })

        axios({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: {
              "access_token": "access_token",
              "type": "Kakao"
            },
          }).then((res) => {
            setData(JSON.stringify(res.data))
          });
    }

    return (
        <div>
            <h3>axios Test</h3>
            <button onClick={post}>post요청</button>
            <p>받은 데이터: {data ? data : 'Loading...'}</p>
        </div>
    )
}

export default AxiosTest