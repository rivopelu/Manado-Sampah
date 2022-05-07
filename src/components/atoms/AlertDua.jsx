import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import BtnComp from './BtnComp'

const AlertDua = ({ title }) => {
    const [alert, setAlert] = useState(true)
    const onClickOke = () => {
        setAlert(false)
    }
    return (
        <div className={`alertDua  top-0 left-0 absolute w-screen h-screen bg-[#000] bg-opacity-30 backdrop-blur-sm z-[10000] flex items-center flex-col justify-center ${alert ? '' : 'hidden'}`}>
            <div className="card bg-white shadow-lg px-4 py-3 rounded-md h-72 w-96 flex items-center justify-center flex-col relative">
                <p className='font-bold text-3xl text-[#ca1f16]'>{title}</p>
                <div className="cursor-pointer oke absolute bottom-5 flex items-center gap-2 right-10 font-bold text-[#ca1f16] bg-[#ca1f1633] px-4 py-1 rounded-lg" onClick={onClickOke}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                    <p>OKE</p>
                </div>
            </div>
        </div>
    )
}

export default AlertDua