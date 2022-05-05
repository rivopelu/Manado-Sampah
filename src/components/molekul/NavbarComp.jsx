import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './style/Navbar.scss'
const NavbarComp = () => {

    const [klikToggle, setKlikToggle] = useState(true)

    const onClickToggle = () => {
        setKlikToggle(!klikToggle)

    }

    const NavbarLink = [
        { title: 'Home', link: '/' },
        { title: 'Point', link: '/point' },
        { title: 'Blog', link: '/blog' },
        { title: 'Contact', link: '/contact' },
    ]
    return (
        <div className='fixed  z-40 navbarComp py-3 border-b border-ijo'>
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

                                <li><NavLink activeClassName='active ' className='lg:hover:text-main-orange duration-200' to={item.link}>{item.title}</NavLink></li>
                            ))
                        }
                    </ul>
                    <ul className='login-register lg:flex gap-3 lg:ml-10'>
                        <li><NavLink to={'/register'}>Daftar</NavLink></li>
                        <li className='masuk'><NavLink to={'/login'} className='flex bg-ijo-gradient px-3 text-white hover:-translate-y-1 w-fit duration-200 hover:border-b-2 rounded-sm border-main-orange '>Masuk</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default NavbarComp