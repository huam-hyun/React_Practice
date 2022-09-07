import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UserInfo = () =>{
    const { state } = useLocation()
    const [userInfo, setUserInfo] = useState()
    const navigate = useNavigate()

    useEffect(() =>{
        const getUserInfo = async () =>{
            const res = await axios({
                method: 'POST',
                url: 'https://kapi.kakao.com/v2/user/me',
                headers:{
                    Authorization: `Bearer ${state.accessToken}`
                }
            })

            console.log(res)
            setUserInfo(res.data.kakao_account)
        }

        getUserInfo()
    }, [])

    const logout = () =>{
        axios({
            method: 'POST',
            url: 'https://kapi.kakao.com/v1/user/logout',
            headers: {
                Authorization: `Bearer ${state.accessToken}`
            }
        }).then(res =>{
            console.log(res)
            alert('로그아웃 되었습니다')
            navigate('/')
        })
    }

    const REST_API_KEY = '81937cfce25b708db35a8f1d1bd51f64'
    const LOGOUT_REDIRECT_URI = 'http://localhost:3000/'
    const KakaoLogoutURL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`

    return (
        <div>
            UserInfo Page
            <hr />
            사용자가 동의한 내용에 따라 달라짐 <br />
            우리는 이메일만 동의 받았음 <br />
{/* 
            email: {userInfo.email} <br />
            email_needs_agreement: {userInfo.email_needs_agreement.toString()} <br />
            has_email: {userInfo.has_email.toString()} <br />
            is_email_valid: {userInfo.is_email_valid.toString()} <br />
            is_email_verified: {userInfo.is_email_verified.toString()} <br /> */}
            <br />{JSON.stringify(userInfo)} <br />

            <button onClick={logout}>Logout</button><a href={KakaoLogoutURL}>LogoutWithDisconnect</a>
        </div>
    )
}

export default UserInfo