'use client';
import { contactInfo, static_assets } from '@/data'
import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Breadcrumbs from './Breadcrumbs'
import { trackCallClick } from '@/lib/analytics'

const Header = ({ title, desc, cta = true }: { title: string, desc: string | null, cta: boolean }) => {
    return (
        <section className="relative flex flex-col items-center justify-center text-white bg-primary/50 gap-4 py-20 px-6">
            <Image
                src={static_assets + '/images/hero_bg_2.jpg'}
                fill
                className="object-cover -z-10"
                alt="header_section"
            />
            <div className="absolute inset-0 bg-heading/55 -z-[5]" />
            <Breadcrumbs />
            <h1 className="text-center container text-white">{title}</h1>
            {desc && (
                <p className="p1 !text-white/90 text-center max-w-2xl">{desc}</p>
            )}
            {cta && (
                <div>
                    <a
                        href={contactInfo.phone.href}
                        className="flex gap-2 btn-secondary"
                        onClick={trackCallClick('Header Section')}
                    >
                        <BsFillTelephoneFill size={20} />
                        {contactInfo.phone.text}
                    </a>
                </div>
            )}
        </section>
    )
}

export default Header
