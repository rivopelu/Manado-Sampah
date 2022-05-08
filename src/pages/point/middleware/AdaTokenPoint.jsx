import React from 'react'
import { NAME_LOCAL, USER_NAME_LOCAL } from '../../../utils'
import { PointPutihImg } from '../img'

const AdaTokenPoint = () => {

    const nama = NAME_LOCAL
    const username = USER_NAME_LOCAL

    return (
        <div className="adaToken ">
            <div className="flex items-center w-full flex-col lg:flex-row">

                <div className="kiri lg:w-[40%]">
                    <p className='font-bold text-3xl lg:text-4xl'>Hallo {username} !!</p>
                    <p className='text-text-abu'>Siapkan sampahmu tuk diubah menjadi trashPoint dan dapatkan berbagai hadiah menarik</p>
                </div>
                <div className="kanan px-0 w-full  lg:w-[60%]  lg:pl-14 ">
                    <div className="card bg-gradient-to-br flex from-toska to-ijo w-full p-3 rounded-lg flex-col lg:flex-row lg:px-10 items-center lg:gap-3 ">
                        <div className="kanan-card flex flex-col lg:items-start items-center gap-1 text-white">
                            <p>{nama}</p>
                            <h1 className='text-xl font-semibold '>Trash Point</h1>
                            <div className='flex  items-center gap-1 lg:pt-4'>
                                <img src={PointPutihImg} className={'w-5 lg:w-10'} alt="TrashPoint" />
                                <h1 className='font-bold text-2xl lg:text-3xl '>675.273</h1>
                            </div>
                        </div>
                        <div className="kiri-card flex items-center justify-center w-full">
                            kiti
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdaTokenPoint