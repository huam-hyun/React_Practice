import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import UseState from '../pages/UseState'

const Root = (): React.ReactNode => {
  return (
    <Routes>
      {/* 새로운 페이지를 추가하고 싶다면 여기에 */}
      <Route path="/" element={<Home />} />
      <Route path="/useState" element={<UseState />} />
    </Routes>
  )
}

export default Root
