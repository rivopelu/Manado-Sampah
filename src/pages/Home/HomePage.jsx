import React from 'react'
import CardSection from './components/CardSection'
import HeroSection from './components/HeroSection'

const HomePage = () => {
    const token = localStorage.getItem('token')
    console.log('token ---->>>', token)
    return (
        <div className='HomePage'>
            <HeroSection />
            <CardSection />
        </div>
    )
}

export default HomePage