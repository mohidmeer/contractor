import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className=''>
            <Image
                src="/logo.svg"
                alt="Total Care logo"
                width={150}
                height={120}
                className='sm:w-[200px]'
            />
        </div>
    )
}
export default Logo