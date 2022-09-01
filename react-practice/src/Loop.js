import React, { useState, useEffect } from 'react'
import Movie from './components/Movie.js'
import './Loop.css'

function Loop(){
    const [movieTitle, setMovieTitle] = useState('')
    const [movieYear, setMovieYear] = useState('')
    const [movies, setMovies] = useState([
        {title: 'sample1', year: 2001},
        {title: 'sample2', year: 2002},
        {title: 'sample3', year: 2003}
    ])
    
    const renderMovies = movies.map(movie => {
        // JSX형태로
        return (
            // key를 사용해주어야 경고가 뜨지 않는다
            <div className='movie' key={movie.title}>
                <div className='movie-title'>{movie.title}</div>
                <div className='movie-year'>{movie.year}</div>
            </div>
        )
    })
    const renderMovieComponent = movies.map(movie =>{
        return (
            // 컴포넌트 일때는 컴포넌트에 key를 주면 경고가 뜨지 않는다
            <Movie movie={movie} key={movie.title} />
        )
    })

    // 새로운 영화 추가
    const addMovie = (event) => {
        // 페이지 새로고침을 막기 위함
        event.preventDefault()
        setMovies([
            ...movies,
            { title: movieTitle, year: movieYear }
        ])
    }

    useEffect(() => {
        console.log('render')
    })

    return (
        <div>
            <h1>Movie list</h1>
            반복문을 사용하지 않았을 때
            <div className='movie'>
                <div className='movie-title'>{movies[0].title}</div>
                <div className='movie-year'>{movies[0].year}</div>
            </div>
            <div className='movie'>
                <div className='movie-title'>{movies[1].title}</div>
                <div className='movie-year'>{movies[1].year}</div>
            </div>
            <div className='movie'>
                <div className='movie-title'>{movies[2].title}</div>
                <div className='movie-year'>{movies[2].year}</div>
            </div>
            
            <br /><br />
            .map으로 반복해줬을 때
            {renderMovies}

            <br /><br />
            컴포넌트로 만들어서 반복할 때
            {renderMovieComponent}

            {/* 새로운 영화 추가하기 */}
            <form onSubmit={addMovie}>
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
            </form>
        </div>
    )
}

export default Loop