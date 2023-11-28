import React from 'react'

import Navbar from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import UseEffect from '../pages/UseEffect'
import UseState from '../pages/UseState'

const Root = (): React.ReactNode => {
  return (
    <>
      <Navbar />
      <header>리액트에서 사용할 여러가지 훅을 연습할 페이지</header>
    </>
  )
}

export default Root
