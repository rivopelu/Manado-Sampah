import React from 'react'

const InputComp = () => {
    return (
        <div className='inputComp relative'>
            <div className="label">label</div>
            <input className={`px-3 py-1 rounded-sm text-sm border-abu-border border bg-base focus:outline-none focus:border-ijo`} type="text" />
        </div>
    )
}

export default InputComp