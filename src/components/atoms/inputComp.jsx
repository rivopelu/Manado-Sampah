import React, { useState } from 'react'
import './style/inputComp.scss'

const InputComp = ({ className, type, title }) => {
    const [klikInput, setKlikInput] = useState(false)

    const inputChange = () => {
        setKlikInput(true)
    }
    return (
        <div className="inputComp flex w-full relative">
            <input onClick={inputChange} type={type} className={` bg-base ${klikInput ? 'inputActive' : ''} border w-full  px-6 focus:outline-none rounded-sm py-2  border-abu-border border-gray-400 focus:border-ijo text-sm    ${className}`} />

            <div onClick={inputChange} className={`label absolute top-[8px] text-gray-500 left-3 bgg text-sm `}>{title}</div>

        </div>
    )
}

export default InputComp