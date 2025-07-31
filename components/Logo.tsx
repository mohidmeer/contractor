import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='w-fit flex items-center flex-col shrink-0'>
            <Image
                src="/logo.png"
                alt="Total Care logo"
                width={180}
                height={80}
            />
        </div>
    )
}
export default Logo