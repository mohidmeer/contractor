'use client';
import { contactInfo } from '@/data'
import { trackCallClick } from '@/lib/analytics'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'

const CallButton = () => {
    return (
        <a href={contactInfo.phone.href} className='btn-primary fixed bottom-10 right-5 flex items-center gap-2 !rounded-full shadow-2xl border'  onClick={trackCallClick('Floating call Button')} >
            <BsFillTelephoneFill size={20} className='s' />
            {contactInfo.phone.text}
        </a>
    )
}

export default CallButton
