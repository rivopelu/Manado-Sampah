
import React from 'react'


import point from '../img/point.png'
import truk from '../img/truk.png'
import voucer from '../img/voucer.png'
import rrr from '../img/3r.png'
import { CardHome } from '../../../components'
const CardSection = () => {


    const dataCard = [
        {
            id: 1,
            img: point,
            title: 'point',
            desc: 'Ubah sampahmu menjadi sesuatu yang bermanfaat seperti kupon dan uang tunai'
        },
        {
            id: 2,
            img: truk,
            title: 'Akses Mudah',
            desc: 'Akses dalam penyetoran lebih mudah dengan layanan penjemputan di rumah'
        },
        {
            id: 3,
            img: voucer,
            title: 'voucer',
            desc: 'Tukarkan Point sampahmu dengan voucer-voucer yang menarik '
        },
        {
            id: 4,
            img: rrr,
            title: '3R ',
            desc: 'Mendukung Program Reuse Reduce Rycycle menjadi lebih mudah'
        },
    ]



    return (
        <div className='bg-ijo-tua containerMain mt-8  '>
            <div className='flex  items-center flex-col lg:flex-row lg:justify-between py-10 lg:py-0'>
                {
                    dataCard.map((item) => (

                        <CardHome key={item.id} img={item.img} title={item.title} desc={item.desc} />
                    ))
                }

            </div>
        </div>
    )
}

export default CardSection