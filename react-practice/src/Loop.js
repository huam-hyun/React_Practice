import React, { useState, useEffect } from 'react'
import{
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Movie from './components/Movie.js'
import MovieForm from './components/MovieForm.js'
import Navbar from './components/Navbar.js'
import './Loop.css'

function Loop(){
    const [movies, setMovies] = useState([
        
    ])
    
    const renderMovies = movies.map(movie => {
        // JSX형태로
        return (
            // key를 사용해주어야 경고가 뜨지 않는다
            <div className='movie' key={movie.title}>
                <div className='movie-title'>
                    {movie.title}
                    <span className='movie-year'>({movie.year})</span>
                </div>
            </div>
        )
    })

    // 새로운 영화 추가
    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie
        ])
    }

    // 영화 삭제
    const removeMovie = (id) =>{
        setMovies([
            ...movies.filter(movie => movie.id !== id)
        ])
    }

    const renderMovieComponent = movies.map(movie =>{
        return (
            // 컴포넌트 일때는 컴포넌트에 key를 주면 경고가 뜨지 않는다
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
        )
    })

    useEffect(() => {
        console.log('render')
    })

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<h1>Home</h1>}>
                        <Route path='movies' element={
                            {renderMovieComponent}
                        } />
                    </Route>
                </Routes>
                
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
                .map으로 반복해줬을 때
                {renderMovies}

                <br /><br />
                컴포넌트로 만들어서 반복할 때

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
        </Router>
    )
}

export default Loop