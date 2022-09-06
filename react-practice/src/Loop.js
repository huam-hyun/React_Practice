import React, { useEffect } from 'react'
import{
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

import Navbar from './components/Navbar.js'

// routes.js로 이동
// import Users from './pages/Users.js'
// import Home from './pages/Home.js'
// import Movies from './pages/Movies.js'

import routes from './routes.js'
import './Loop.css'

function Loop(){
    useEffect(() => {
        console.log('render')
    })

    return (
        <div>
            <Navbar />
            <div className='container'>
                <Routes>
                    {/* 일일히 반복한 것을 routes.js를 map으로 반복시킴 */}
                    {routes.map(route =>{
                        return (
                            <Route path={route.path} element={<route.component />} />
                        )
                    })}
                    {/* <Route path='/' element={<Home />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/users' element={<Users />} /> */}
                </Routes>
            </div>
            
            
            {/* 새로운 영화 추가하기 */}
            {/* 부모 컴포넌트가 자식 컴포넌트로 함수를 전해주어 부모의 상태를 변경할 수 있도록 한다 */}
            
            
            {/* <h1>Movie list</h1>
            반복문을 사용하지 않았을 때
            <div className='movie'>
                <div className='movie-title'>
                    {movies[0].title}
                    <span className='movie-year'>({movies[0].year})</span>
                </div>
            </div>
            <div className='movie'>
                <div className='movie-title'>
                    {movies[1].title}
                    <span className='movie-year'>({movies[1].year})</span>
                </div>
            </div>
            <div className='movie'>
                <div className='movie-title'>
                    {movies[2].title}
                    <span className='movie-year'>({movies[2].year})</span>
                </div>
            </div>
            
            <br /><br /> */}
            {/* .map으로 반복해줬을 때
            {renderMovies} */}

            {/* <br /><br />
            컴포넌트로 만들어서 반복할 때 */}

            {/* 자식 컴포넌트를 사용하지 않았을 때 코드 */}
            {/* <form onSubmit={addMovie}>
                <input
                    type="text"
                    value={movieTitle}
                    placeholder="영화제목"
                    onChange={e => setMovieTitle(e.target.value)}
                /><br />
                <input
                    type="text"
                    value={movieYear}
                    placeholder="개봉년도"
                    onChange={e => setMovieYear(e.target.value)}
                /><br />
                <button type='submit'>영화추가</button>
            </form> */}
        </div>
    )
}

export default Loop