import React from 'react'

const CardHome = ({ img, title, desc }) => {
    return (
        <div className="card my-1  lg:my-10 lg:h-80 justify-between py-4 lg:py-10 px-3 bg-white shadow-lg rounded-xl flex lg:flex-col lg:w-60 items-center">
            <div className="kiri flex items-center pr-3">
                <img className='w-40 lg:w-20' src={img} alt="" />
            </div>
            <div className='lg:text-center lg:pt-5'>
                <h1 className='font-bold text-2xl pb-2 uppercase'>{title}</h1>
                <p className='text-text-abu'>{desc}</p>
            </div>
        </div>
    )
}

export default CardHome