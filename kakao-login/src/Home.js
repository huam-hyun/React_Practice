import React from "react";

const Home = () =>{
    const REST_API_KEY = '81937cfce25b708db35a8f1d1bd51f64'
    const REDIRECT_URI = 'http://localhost:3000/user'
    const KakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

    return (
        // 1. href로 내가 만든 URL로 접근하면 알아서 kakao 로그인 창이 뜬다
        // 2. 로그인이 완료되면 내가 Redirect_URI에 적은 주소 + code="~~~" 형태로 다시 redirect한다
        // 3. 해당 code 는 인가 코드로 인가 코드를 통해 다시 Access 토큰을 발급받아야 한다
        // axios
        <a id="custom-login-btn" href={KakaoLoginURL}>
            <img
                src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                width="222"
                alt="카카오 로그인 버튼"
            />
        </a>
    )
}

export default Home