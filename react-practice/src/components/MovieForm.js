import React, { useState } from 'react'

const MovieForm = ({ addMovie }) =>{
    const [movieTitle, setMovieTitle] = useState('')
    const [movieYear, setMovieYear] = useState(0)

    const resetForm = () =>{
        setMovieTitle('')
        setMovieYear('')
    }

    const onSubmit = (event) => {
        // 페이지 새로고침을 막기 위함
        event.preventDefault()
        // addMovie는 부모 컴포넌트에서 props로 넘겨준다
        addMovie({
            title: movieTitle,
            year: movieYear
        })
        resetForm()
    }

    return (
        <form onSubmit={onSubmit}>
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
    )
}

export default MovieForm