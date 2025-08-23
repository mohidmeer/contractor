'use client';
import { contactInfo ,static_assets  } from '@/data'
import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Breadcrumbs from './Breadcrumbs'
import { trackCallClick } from '@/lib/analytics'

const Header = ({ title, desc, cta = true }: { title: string, desc: string | null, cta: boolean }) => {
    return (
        <section className=' relative flex flex-col items-center justify-center text-white bg-primary/30 gap-4 py-20 px-6'>
            <Breadcrumbs />
            <Image src={ static_assets+'/images/hero_bg_2.jpg'} fill className=' object-cover -z-5' alt='header_section' />
            <h1 className='text-center container'>{title}</h1>
            <p className='p1'>{desc}</p>
            {
                cta &&
                <div>
                    <a href={contactInfo.phone.href} className='flex gap-2 btn-primary' onClick={trackCallClick('Header Section')}>
                        <BsFillTelephoneFill size={20} className='' />
                        {contactInfo.phone.text}
                    </a>
                </div>
            }
        </section>
    )
}

export default Header
