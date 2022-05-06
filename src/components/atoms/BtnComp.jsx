import React from 'react'
import './style/BtnComp.scss'
const BtnComp = ({ className, title, onClick, ...rest }) => {
    return (
        <div className='mainBtnHover'>

            <button className={`flex px-3 py-1 rounded-md bg-gradient-to-r from-ijo to-toska text-white  hover:from-toska hover:to-ijo-tua duration-200 hover:-translate-y-1 ${className}`} onClick={onClick} {...rest}>{title}</button>
        </div>
    )
}

export default BtnComp