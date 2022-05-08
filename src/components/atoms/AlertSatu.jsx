import React from 'react'
import './style/Alert.scss'
const AlertSatu = ({ title, className }) => {
    return (
        <div className={`alertSatu bg-merah/25 text-merah-tua    relative  px-3 py-2 rounded-sm ${className} `}>
            <p className=' '>{title}</p>
        </div>
    )
}

export default AlertSatu