import React, { useEffect, useState } from "react";
import axios from 'axios'

const User = () =>{
    // 로그인 후 받아온 인가코드
    const code = window.location.href.split('code=')[1]
    const [token, setToken] = useState()

    // useEffect에 바로 async 화살표 함수를 사용하면 오류가 뜬다
    // 함수 하나 만들어서 실행시키면 괜찮아지니까 참고
    useEffect(() =>{
        const getToken = async () =>{
            await axios({
                url: 'https://kauth.kakao.com/oauth/token',
                method: 'POST',
                params: {
                    grant_type: 'authorization_code',
                    client_id: '81937cfce25b708db35a8f1d1bd51f64',
                    redirect_uri: 'http://localhost:3000/user',
                    code: code
                }
            }).then(res =>{
                console.log(res.data)
                setToken(res)
            })
        }
        
        getToken()
    }, [])
    
    return (
        <div>
            <div>인가코드: {code}</div>
            <div>Access토큰: {!token ? 'Loading...' : token.data.access_token}</div>

            <br />
            <div>
                REST API를 이용한 로그인의 경우 인가 코드를 이용한 토큰 발급은 1번밖에 안되므로 2번이상 시도하지 말것
            </div>
        </div>
    )
}

export default User