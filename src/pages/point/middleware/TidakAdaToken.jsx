import React from 'react'
import { Link } from 'react-router-dom'

const TidakAdaToken = () => {
    return (
        <div className='flex items-center justify-center bg-gradient-to-tr flex-col  from-toska to-ijo rounded-lg w-1/2 mx-auto'>
            <div className='p-4 flex flex-col items-center gap-3' >

                <h1 className='font-bold capitalize text-white'>silahkan masuk atau daftar untuk melihat trash point anda</h1>

                <div className='flex   text-white gap-7'>
                    <Link className='border  px-3 py-1 hover:bg-itam/30 rounded-lg duration-200' to={'/login'}>Masuk</Link>
                    <Link className='border  px-3 py-1 hover:bg-itam/30 rounded-lg duration-200' to={'/register'}>Daftar</Link>

                </div>
            </div>
        </div>
    )
}

export default TidakAdaToken