import React from 'react'
import { BrandLogo, InputComp } from '../../components'
import registerImge from './img/register.png'
const Registerpage = () => {
    return (
        <div className='registerPage flex items-center min-h-screen flex-col lg:flex-row'>
            <div className="kiri w-1/2 flex justify-between items-center flex-col">
                <img src={registerImge} alt="" />
            </div>
            <div className="kanan w-1/2  flex justify-between items-center flex-col h-screen py-16">
                <BrandLogo />
                <div className='w-full flex flex-col items-center'>
                    <p className='text-2xl'>Daftar Akun</p>
                    <div className="inputGroup">
                        <div className="input">

                            <InputComp />
                        </div>
                    </div>
                </div>
                <BrandLogo />
            </div>
        </div>
    )
}

export default Registerpage