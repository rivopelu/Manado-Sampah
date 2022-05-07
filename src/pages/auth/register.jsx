
import { faEnvelope, faUserAlt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { BrandLogo, BtnComp, InputComp } from '../../components'
import registerImge from './img/register.png'
import './auth.scss'
import { useNavigate } from 'react-router-dom'

import logo1 from './img/google.png'
import logo2 from './img/facebook.png'
import logo3 from './img/apple.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URI } from '../../utils'

const Registerpage = () => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    // ALERT
    const [alert, setAlert] = useState('')


    const changeName = (e) => {
        const value = e.target.value
        setName(value)
        setError('')
    }

    const changeUserName = (e) => {
        const value = e.target.value
        setUserName(value)
        setError('')
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
        setError('')
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
        setError('')
    }

    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        setError('')
    }


    // Mata Password
    const [mata, setMata] = useState(false)
    const mataKlik = () => {
        setMata(!mata)
    }



    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/login';
        navigate(path)
    }
    const klikDaftar = () => {
        const data = {
            name: name,
            username: userName,
            email: email,
            password: password
        }

        axios.post(`${API_URI}/user/register`, data)
            .then(result => {
                if (confirmPassword === password) {

                    if (result) {
                        if (result.data) {
                            // setAlert(result.data.message)
                            routeChange()
                        }
                    }
                    console.log(result.data)
                } else {
                    setError('Password Tidak Sama')
                }
            })
            .catch(e => {
                setError(e.response.data.message)
            })
    }

    return (
        <div className='AuthPage flex items-center min-h-screen flex-col lg:flex-row'>
            <div className="kiri w-1/2 flex justify-between items-center flex-col">
                <img src={registerImge} alt="" />
            </div>
            <div className="kanan lg:w-1/2 w-full px-[20px] lg:px-0 flex justify-between items-center  flex-col h-screen py-9">
                <BrandLogo />
                <div className='w-full flex  flex-col items-center '>
                    <p className='text-2xl mb-5'>Daftar Akun</p>
                    <div className="inputGroup w-full lg:px-36 2xl:px-60">
                        <div className="input flex flex-col gap-3">


                            {/* ALERTTTTT */}

                            {
                                error && (

                                    <div className="alert bg-main-orange">
                                        <p>{error}</p>
                                    </div>
                                )
                            }
                            {
                                alert && (

                                    <div className="alert bg-main-orange">
                                        <p>{alert}</p>
                                    </div>
                                )
                            }



                            {/* END ALERT */}


                            <div className="input-title flex items-center relative">
                                <InputComp title={'Nama Lengkap'} type={'text'} value={name} onChange={changeName} className={'pr-10'} />
                                <FontAwesomeIcon icon={faUserAlt} className='text-text-abu absolute right-0 pr-4' />
                            </div>
                            <div className="input-title flex items-center relative">
                                <InputComp title={'UserName'} type={'text'} className={'pr-10'} value={userName} onChange={changeUserName} />
                                <FontAwesomeIcon icon={faUserAlt} className='text-text-abu absolute right-0 pr-4' />
                            </div>
                            <div className="input-title flex items-center relative">
                                <InputComp title={'email'} type={'email'} className={'pr-10'} value={email} onChange={changeEmail} />
                                <FontAwesomeIcon icon={faEnvelope} className='text-text-abu absolute right-0 pr-4' />
                            </div>
                            <div className="input-title flex items-center relative">
                                <InputComp title={'password'} type={mata ? 'password' : 'text'} className={'pr-10'} value={password} onChange={changePassword} />
                                <FontAwesomeIcon icon={mata ? faEye : faEyeSlash} onClick={mataKlik} className='text-text-abu absolute right-0 pr-4 cursor-pointer' />
                            </div>
                            <div className="input-title flex items-center relative">
                                <InputComp title={'Confirm Password'} type={mata ? 'password' : 'text'} className={'pr-10'} value={confirmPassword} onChange={changeConfirmPassword} />
                                <FontAwesomeIcon icon={mata ? faEye : faEyeSlash} onClick={mataKlik} className='text-text-abu absolute right-0 pr-4 cursor-pointer' />
                            </div>
                        </div>
                        <div className="relative garis border-b w-full border-abu-border  my-6 flex items-center">
                            <p className=" bg-base px-2 text-[13px] text-abu-border  mx-auto translate-y-[10px]">
                                Atau Masuk Dengan
                            </p>
                        </div>
                        <div className="SOSMED-GROUP flex justify-center w-full ">
                            {/* MASUK DENGAN GOOGLE */}
                            <div onClick={() => alert('klik google')} className="login-sosmed flex text-center items-center justify-center  hover:-translate-y-1 duration-150 border rounded-md border-abu-border cursor-pointer mx-1 h-10 w-10">


                                <img className=' w-6' src={logo1} alt="googleLogo" />

                            </div>
                            <div onClick={() => alert('klik google')} className="login-sosmed flex text-center items-center justify-center  hover:-translate-y-1 duration-150 border rounded-md border-abu-border cursor-pointer mx-1 h-10 w-10">


                                <img className=' w-6' src={logo2} alt="googleLogo" />

                            </div>
                            <div onClick={() => alert('klik google')} className="login-sosmed flex text-center items-center justify-center  hover:-translate-y-1 duration-150 border rounded-md border-abu-border cursor-pointer mx-1 h-10 w-10">


                                <img className=' w-6' src={logo3} alt="googleLogo" />

                            </div>

                        </div>

                        <BtnComp onClick={klikDaftar} title={'Daftar'} className='w-full flex justify-center my-5 items-center' />

                        <p className='text-sm text-center py-5'>Sudah Mempunya Akun ? <Link className='text-ijo' to={'/login'}>Silahkan Masuk</Link></p>
                    </div>
                </div>
                <p className='text-text-abu'>	&copy; 2022 - <a href="#" className='text-ijo'>RivoPelu</a></p>
            </div>
        </div>
    )
}

export default Registerpage