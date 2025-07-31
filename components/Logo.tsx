import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className=''>
            <Image
                src="/logo.png"
                alt="Total Care logo"
                width={200}
                height={120}
                className='w-auto h-auto'
            />
        </div>
    )
}
export default Logo