import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage } from './index'
const Main = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>


        </>
    )
}

export default Main