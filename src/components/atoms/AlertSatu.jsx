import React from 'react'
import './style/Alert.scss'
const AlertSatu = ({ title, className }) => {
    return (
        <div className={`${className} alertSatu bg-gradient-to-tr  text-white px-3 py-2 rounded-sm`}>
            <p>{title}</p>
        </div>
    )
}

export default AlertSatu