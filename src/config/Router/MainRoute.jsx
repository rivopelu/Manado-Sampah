import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main, Registerpage } from '../../pages'
import Hello from '../../pages/Hello'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/register' element={<Registerpage />} />
            <Route path='/' element={<Main />} />
        </Routes>
    )
}

export default MainRoute