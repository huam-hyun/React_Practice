import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import UseState from '../pages/UseState'
import UseEffect from '../pages/UseEffect'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '*',
    Component: Root,
    children: [
      { path: 'Home', Component: Home },
      { path: 'useState', Component: UseState },
      { path: 'useEffect', Component: UseEffect },
    ]
  },
])

export default router
