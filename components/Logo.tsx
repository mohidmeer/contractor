import { siteLogo, siteName } from '@/data'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className=''>
            <Image
                src={siteLogo}
                alt={siteName}
                width={200}
                height={120}
                className='sm:w-[200px]'
            />
        </div>
    )
}
export default Logo