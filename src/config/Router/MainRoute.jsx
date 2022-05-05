import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main } from '../../pages'
import Hello from '../../pages/Hello'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/hello' element={<Hello />} />
            <Route path='/' element={<Main />} />
        </Routes>
    )
}

export default MainRoute