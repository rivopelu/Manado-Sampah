import React from 'react'

const BrandLogo = ({ className }) => {
    return (

        <div to='/' className={`brand lg:text-2xl ${className}`}>
            <span className='text-ijo'>Manado</span>
            <span className='text-main-orange'>Recycle</span>
        </div>
    )
}

export default BrandLogo