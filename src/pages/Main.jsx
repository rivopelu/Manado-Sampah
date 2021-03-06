import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FooterComp, NavbarComp } from '../components'

import { HomePage } from './index'
import PointPage from './point/PointPage'
const Main = () => {
    return (
        <>
            <NavbarComp />
            <div className=" min-h-screen pt-16 ">

                <Routes>
                    <Route path='/point' element={<PointPage />} />
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </div>
            <FooterComp />


        </>
    )
}

export default Main