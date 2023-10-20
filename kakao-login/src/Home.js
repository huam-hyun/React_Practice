import React from "react";

import { KAKAO_LOGIN_URL } from "./data";

const Home = () =>{
    return (
        // 1. href로 내가 만든 URL로 접근하면 알아서 kakao 로그인 창이 뜬다
        // 2. 로그인이 완료되면 내가 Redirect_URI에 적은 주소 + code="~~~" 형태로 다시 redirect한다
        // 3. 해당 code 는 인가 코드로 인가 코드를 통해 다시 Access 토큰을 발급받아야 한다
        // axios
        <a id="custom-login-btn" href={KAKAO_LOGIN_URL}>
            <img
                src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                width="222"
                alt="카카오 로그인 버튼"
            />
        </a>
    )
}

export default Home