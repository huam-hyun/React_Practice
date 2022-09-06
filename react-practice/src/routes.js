import Users from './pages/Users.js'
import Home from './pages/Home.js'
import Movies from './pages/Movies.js'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/users',
        component: Users
    }
]