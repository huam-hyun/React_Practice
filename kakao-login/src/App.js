import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import User from './User.js'
import Home from './Home.js'
import UserInfo from './UserInfo.js'

function App(){
    
    return (
        <div id='App'>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/user' element={<User />} />
                <Route path='/userInfo' element={<UserInfo />} />
            </Routes>
        </div>
    )
}

export default App