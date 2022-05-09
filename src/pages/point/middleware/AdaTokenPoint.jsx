import React from 'react'
import { Link } from 'react-router-dom'
import { MapsComp } from '../../../components'

import { NAME_LOCAL, USER_NAME_LOCAL } from '../../../utils'
import { MenuBoxImg, MenuJamImg, MenuPointImg, PointPutihImg } from '../img'

const AdaTokenPoint = () => {

    const nama = NAME_LOCAL
    const username = USER_NAME_LOCAL


    const dataMenuCard = [
        { id: 1, gambar: MenuBoxImg, title: 'Setor Sampah', path: '/point' },
        { id: 2, gambar: MenuJamImg, title: 'Riwayat', path: '/point' },
        { id: 3, gambar: MenuPointImg, title: 'Tukar Point', path: '/point' },
    ]

    return (
        <div className="adaToken flex flex-col ">
            <div className="flex items-center w-full flex-col lg:flex-row">

                <div className="kiri lg:w-[40%]">
                    <p className='font-bold text-3xl lg:text-4xl'>Hallo {username} !!</p>
                    <p className='text-text-abu'>Siapkan sampahmu tuk diubah menjadi trashPoint dan dapatkan berbagai hadiah menarik</p>
                </div>
                <div className="kanan px-0 w-full  lg:w-[60%]  lg:pl-14  mt-6 lg:mt-0">
                    <div className="card bg-gradient-to-br flex from-toska to-ijo w-full p-3 rounded-lg flex-col lg:flex-row lg:px-10 items-center lg:gap-3 ">
                        <div className="kanan-card flex flex-col lg:w-[30%] lg:items-start items-center gap-1 text-white">
                            <p>{nama}</p>
                            <h1 className='text-xl font-semibold '>Trash Point</h1>
                            <div className='flex  items-center gap-1 lg:pt-1'>
                                <img src={PointPutihImg} className={'w-5 lg:w-10'} alt="TrashPoint" />
                                <h1 className='font-bold text-2xl lg:text-3xl '>675.273</h1>
                            </div>
                        </div>
                        <div className="kiri-card  flex-col flex items-center justify-center lg:w-[70%] w-full  lg:ml-6">
                            <div className='flex w-full pt-4 items-center justify-center gap-6'>

                                {
                                    dataMenuCard.map((item) => (
                                        <Link key={item.id} to={item.path} className="menu flex flex-col items-center gap-2">
                                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-base items-center justify-center flex hover:border-text-abu border-2 duration-200 border-base ">
                                                <img src={item.gambar} className='lg:w-10 w-8 p-1' alt="menuIcon" />
                                            </div>
                                            <p className='text-xs text-white'>{item.title}</p>
                                        </Link>
                                    ))
                                }
                            </div>

                            <div className="card_bawa bg-base w-full px-3 py-4 mt-5 rounded-lg flex justify-between items-center ">
                                <div className='flex flex-col items-center w-24 '>
                                    <h1 className='font-bold text-xl'>12</h1>
                                    <p className='text-sm'>transaksi</p>
                                </div>
                                <div className="garisPisah"></div>
                                <div className='flex flex-col items-center w-24 '>
                                    <h1 className='font-bold text-xl'>24</h1>
                                    <p className='text-sm'>penukaran</p>
                                </div>
                                <div className="garisPisah"></div>
                                <div className='flex flex-col items-center w-24 '>
                                    <h1 className='font-bold text-xl'>10</h1>
                                    <p className='text-sm'>voucer</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen relative'>

                <MapsComp />
            </div>

        </div>
    )
}

export default AdaTokenPoint