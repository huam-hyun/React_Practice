import React, { useState } from 'react'
import InputField from './InputField.js'

const MovieForm = ({ addMovie }) =>{
    const [movieTitle, setMovieTitle] = useState('')
    const [movieYear, setMovieYear] = useState('')
    const [titleError, setTitleError] = useState('')
    const [yearError, setYearError] = useState('')

    const resetForm = () =>{
        setMovieTitle('')
        setMovieYear('')
    }

    const resetErrors = () =>{
        setTitleError('')
        setYearError('')
    }

    const validateForm = () =>{
        resetErrors()
        let validated = true;

        if(!movieTitle){
            setTitleError('영화제목을 넣어주세요')
            validated = false
        }

        if(!movieYear){
            setYearError('개봉년도를 넣어주세요')
            validated = false
        }

        return validated;
    }

    const onSubmit = (event) => {
        // 페이지 새로고침을 막기 위함
        event.preventDefault()

        // true면 영화 추가
        if(validateForm()){
            // addMovie는 부모 컴포넌트에서 props로 넘겨준다
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear
            })
            resetErrors()
            resetForm()
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <InputField
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleError}
            />
            {/* <input
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
            /><br />
            <div style={{color: 'red'}}>{titleError}</div> */}
            <InputField
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
                errorMessage={yearError}
            />
            {/* <input
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
            /><br />
            <div style={{color: 'red'}}>{yearError}</div> */}
            <button type='submit'>영화추가</button>
        </form>
    )
}

export default MovieForm