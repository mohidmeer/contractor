import { contactInfo } from '@/sites/roofing/constants'
import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Breadcrumbs from './Breadcrumbs'

const Header = ({ title, desc, cta = true }: { title: string, desc: string | null, cta: boolean }) => {
    return (
        <section className=' relative flex flex-col items-center justify-center text-white bg-primary/30 gap-4 py-20'>
            <Breadcrumbs />
            <Image src={'/images/hero_bg_2.jpg'} fill className=' object-cover -z-5' alt='header_section' />
            <h1 className='!text-5xl'>{title}</h1>
            <p className='text-lg'>{desc}</p>
            {
                cta &&
                <div>
                    <a href={contactInfo.phone.href} className='flex gap-2 btn-primary'>
                        <BsFillTelephoneFill size={20} className='' />
                        {contactInfo.phone.text}
                    </a>
                </div>
            }
        </section>
    )
}

export default Header
