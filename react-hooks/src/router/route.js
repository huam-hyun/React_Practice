import { createBrowserRouter } from 'react-router-dom'

import Root from '../pages/Root'

const router = createBrowserRouter([
  { path: '*', Component: Root },
])

export default router
