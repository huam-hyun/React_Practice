import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'

const Root = (): React.ReactNode => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Root
