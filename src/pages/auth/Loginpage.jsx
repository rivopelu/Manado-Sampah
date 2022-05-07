
import { faEnvelope, faUserAlt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { BrandLogo, BtnComp, InputComp } from '../../components'
import registerImge from './img/register.png'
import './auth.scss'

import logo1 from './img/google.png'
import logo2 from './img/facebook.png'
import logo3 from './img/apple.svg'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    const [mata, setMata] = useState(false)
    const mataKlik = () => {
        setMata(!mata)
    }


    return (
        <div className='AuthPage flex items-center min-h-screen flex-col lg:flex-row'>

            <div className="kanan lg:w-1/2 w-full px-[20px] lg:px-0 flex justify-between items-center  flex-col h-screen py-9">
                <BrandLogo />
                <div className='w-full flex  flex-col items-center '>
                    <p className='text-2xl mb-5'>Masuk</p>

                    <div className="inputGroup w-full lg:px-36 2xl:px-60">
                        <div className="SOSMED-GROUP flex flex-col gap-2 w-full mb-5">
                            {/* MASUK DENGAN GOOGLE */}
                            <div onClick={() => alert('klik google')} className="login-sosmed flex w-full text-center items-center justify-center  hover:-translate-y-1 duration-150 ">
                                <div className='relative border  w-full text-center  mx-auto py-2 rounded-md border-abu-border hover:border-text-abu cursor-pointer'>
                                    Masuk Dengan Google

                                    <img className='absolute h-6  top-2 left-5' src={logo1} alt="googleLogo" />
                                </div>
                            </div>
                            <div onClick={() => alert('klik Facebook')} className="login-sosmed flex w-full text-center items-center justify-center  hover:-translate-y-1 duration-150 ">
                                <div className='relative border  w-full text-center  mx-auto py-2 rounded-md border-abu-border hover:border-text-abu cursor-pointer'>
                                    Masuk Dengan Facebook

                                    <img className='absolute h-6  top-2 left-5' src={logo2} alt="Facebook Logo" />
                                </div>
                            </div>
                            <div onClick={() => alert('klik Apple')} className="login-sosmed flex w-full text-center items-center justify-center  hover:-translate-y-1 duration-150 ">
                                <div className='relative border  w-full text-center  mx-auto py-2 rounded-md border-abu-border hover:border-text-abu cursor-pointer'>
                                    Masuk Dengan Apple

                                    <img className='absolute h-6  top-2 left-5' src={logo3} alt="Facebook Logo" />
                                </div>
                            </div>

                        </div>
                        <div className="relative garis border-b w-full border-abu-border  my-6 flex items-center">
                            <p className=" bg-base px-2 text-[13px] text-abu-border  mx-auto translate-y-[10px]">
                                Atau Masuk Dengan
                            </p>
                        </div>
                        <div className="input flex flex-col gap-3">

                            <div className="input-title flex items-center relative">
                                <InputComp title={'email'} type={'email'} className={'pr-10'} />
                                <FontAwesomeIcon icon={faEnvelope} className='text-text-abu absolute right-0 pr-4' />
                            </div>
                            <div className="input-title flex items-center relative">
                                <InputComp title={'password'} type={mata ? 'password' : 'text'} className={'pr-10'} />
                                <FontAwesomeIcon icon={mata ? faEye : faEyeSlash} onClick={mataKlik} className='text-text-abu absolute right-0 pr-4 cursor-pointer' />
                            </div>

                        </div>

                        <Link to={'/'}>
                            <BtnComp title={'Masuk'} className='w-full flex justify-center my-5 items-center' />
                        </Link>
                        <p className='text-sm text-center py-5'>Belum Mempunyai Akun ? <Link className='text-ijo' to={'/register'}>Silahkan Daftar</Link></p>
                    </div>
                </div>
                <p className='text-text-abu'>	&copy; 2022 - <a href="#" className='text-ijo'>RivoPelu</a></p>
            </div>
            <div className="kiri w-1/2 flex justify-between items-center flex-col">
                <img src={registerImge} alt="login image" />
            </div>

        </div>
    )
}

export default LoginPage