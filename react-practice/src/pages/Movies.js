import React, { useState } from 'react'

import MovieForm from '../components/MovieForm.js'
import Movie from '../components/Movie'

const Movies = () =>{
    const [movies, setMovies] = useState([])

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

    const renderMovieComponent = movies.length ? movies.map(movie =>{
        return (
            // 컴포넌트 일때는 컴포넌트에 key를 주면 경고가 뜨지 않는다
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
        )
    }) : (<h4>추가된 영화가 존재하지 않습니다</h4>)

    return(
        <div>
            <MovieForm addMovie={addMovie} />
            {renderMovieComponent}
        </div>
    )
}

export default Movies