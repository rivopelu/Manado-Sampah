import React from 'react'
import { BtnComp } from '../../../components'
import gambarHero from '../img/HomeHero.png'

const HeroSection = () => {
    return (
        <div className='HeroSection containerMain flex flex-col-reverse lg:flex-row w-full lg:min-h-[90vh] lg:items-center justify-between'>
            <div className="kiri  lg:w-1/2 flex gap-5 flex-col">
                <h1 className='text-3xl capitalize font-bold'>Platform pengolahan sampah kota manado</h1>
                <p className='text-text-abu'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A ut est egestas amet nunc id. Quis urna, nibh lorem est. Venenatis, hendrerit sapien augue ac. Pulvinar et, aliquet lorem malesuada. Consequat in luctus sed morbi metus dolor ornare. Viverra eget quam ipsum sed suspendisse. Amet id nisi iaculis.</p>

                <div className="btnGroup flex gap-3">
                    <BtnComp title={'Selengkapnya'} onClick={() => alert('selengkapnya')} />
                    <BtnComp title={'Tukar Sampah'} onClick={() => alert('tukar sampah')} />
                </div>
            </div>
            <div className="kiri lg:w-1/2">
                <img src={gambarHero} alt="home page manado recycle" />
            </div>
        </div>
    )
}

export default HeroSection