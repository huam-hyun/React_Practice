import React, { ReactElement } from 'react'

import { Route, To, useNavigate } from 'react-router-dom'

const Home = (): ReactElement => {
  const navigate = useNavigate()

  const makeHandlerMoveTo = (target: To) => () => {
    navigate(target)
  }

  return (
    <>
      <header>리액트에서 사용할 여러가지 훅을 연습할 페이지</header>
    </>
  )
}

export default Home
