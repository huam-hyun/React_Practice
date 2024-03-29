import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { KAKAO_LOGOUT_URL } from './data'

const UserInfo = () =>{
    // User 페이지로부터 받아온 token 정보들
    const { state } = useLocation()

    // accessToken으로 받아올 정보를 저장할 공간
    const [userInfo, setUserInfo] = useState()
    const navigate = useNavigate()

    // 페이지에 들어오면 실행할거
    useEffect(() =>{
        // 토큰으로 유저 정보 가져오는 함수
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

    // 그냥 로그아웃하는 함수
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

    const renderInfo = userInfo ? (
        <a>
            email: {userInfo.email} <br />
            email_needs_agreement: {userInfo.email_needs_agreement.toString()} <br />
            has_email: {userInfo.has_email.toString()} <br />
            is_email_valid: {userInfo.is_email_valid.toString()} <br />
            is_email_verified: {userInfo.is_email_verified.toString()} <br />
            <br />{userInfo ? JSON.stringify(userInfo) : 'Loading...'} <br />
        </a>
    ) : 'Loading...'

    return (
        <div>
            UserInfo Page
            <hr />
            사용자가 동의한 내용에 따라 달라짐 <br />
            현재는 이메일만 동의 받았음 <br />

            {renderInfo}

            {/* 그냥 로그아웃하는 버튼, 카카오에 연결된 계정까지 로그아웃하는 링크 */}
            <button onClick={logout}>
                Logout
            </button>
            <a href={KAKAO_LOGOUT_URL}>
                LogoutWithDisconnect
            </a>
        </div>
    )
}

export default UserInfo