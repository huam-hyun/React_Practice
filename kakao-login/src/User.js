import React, { useEffect, useState } from "react";
import axios from 'axios'

import { useNavigate } from "react-router-dom";

import { REST_API_KEY } from "./data";

const User = () =>{
    const navigate = useNavigate()
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
                    client_id: REST_API_KEY,
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

    const getUser = () =>{
        // UserInfo 페이지로 넘겨주기 위한 작업
        const { access_token, expires_in, refresh_token, refresh_token_expires_in, scope, token_type } = token.data
        const state = {
            accessToken : access_token,
            expiresIn: expires_in,
            refreshToken: refresh_token,
            refreshTokenExpiresIn: refresh_token_expires_in,
            scope: scope,
            tokenType: token_type
        }
        navigate('/userInfo', { state })
    }
    
    return (
        <div>
            <div>인가코드: {code}</div>
            <div>Access토큰: {!token ? 'Loading...' : token.data.access_token}</div>
            <button onClick={getUser}>토큰으로 정보 받아오기</button>
            <br />
            <div>
                REST API를 이용한 로그인의 경우 인가 코드를 이용한 토큰 발급은 1번밖에 안되므로 2번이상 시도하지 말것
                <br />
                useEffect가 두번씩 실행되길래 왜 그러나 했더니 react.strict 모드를 사용하면 검사를위해 컴포넌트를 두번씩 렌더링 해서 그런 거였다
            </div>
        </div>
    )
}

export default User