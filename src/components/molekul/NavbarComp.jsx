import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BtnComp } from '../atoms'
import './style/Navbar.scss'
const NavbarComp = () => {
    const [color, setColor] = useState(false)
    const [tokenMain, setTokenMain] = useState(true)

    const token = localStorage.getItem('token')
    console.log('token Navbar ---->>>', token)



    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    const [klikToggle, setKlikToggle] = useState(true)

    const onClickToggle = () => {
        setKlikToggle(!klikToggle)

    }

    const NavbarLink = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Point', link: '/point' },
        { id: 3, title: 'Blog', link: '/blog' },
        { id: 4, title: 'Contact', link: '/contact' },
    ]
    return (
        <div className={`fixed  z-40 navbarComp py-3 border-b ${color ? 'border-ijo' : 'border-base'} bg-base`}>
            <div className="containerMain  w-screen flex justify-between ">

                <Link to='/' className="brand lg:text-2xl">
                    <span className='text-ijo'>Manado</span>
                    <span className='text-main-orange'>Recycle</span>
                </Link>
                <div id="navMenu" onClick={onClickToggle} className={`${klikToggle ? '' : 'active'} z-50`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`kanan ${klikToggle ? '' : 'kanan-active'} flex lg:items-center`}>
                    <ul className='navlist lg:flex lg:gap-3'>
                        {
                            NavbarLink.map((item) => (

                                <li key={item.id}><NavLink activeClassName='active ' className='lg:hover:text-main-orange duration-200' to={item.link}>{item.title}</NavLink></li>
                            ))
                        }
                    </ul>
                    <div className='lg:px-10'>
                        <span className='garisTengahNavbar'></span>
                    </div>
                    <div>
                        {(() => {
                            if (!token) {
                                return (
                                    <KananAuth />
                                )
                            } else {
                                return (
                                    <BtnComp title={'hello'} />
                                )
                            }
                        })()}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default NavbarComp


const KananAuth = () => {
    return (
        <ul className='login-register lg:flex gap-1 lg:gap-3  flex flex-col lg:items-center lg:flex-row mb-12 lg:mb-0 '>
            <li><NavLink className={'hover:text-main-orange duration-200'} to={'/register'}>Daftar</NavLink></li>
            <li><Link to={'/login'}><BtnComp title={'masuk'} /></Link></li>
        </ul>
    )
}

