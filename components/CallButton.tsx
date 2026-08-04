'use client';
import { contactInfo } from '@/data'
import { trackCallClick } from '@/lib/analytics'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'

const CallButton = () => {
    return (
        <a
            href={contactInfo.phone.href}
            className="btn-primary flex h-[52px] items-center gap-2 !rounded-full border border-white/20 shadow-2xl hover:!scale-105"
            onClick={trackCallClick('Floating call Button')}
        >
            <BsFillTelephoneFill size={18} className="text-white" />
            <span className="text-white">{contactInfo.phone.text}</span>
        </a>
    )
}

export default CallButton
