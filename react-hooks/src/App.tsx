import React from 'react'
import Navbar from './component/Navbar/Navbar'

import { RouterProvider } from 'react-router-dom'
import router from './router/route.js'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
