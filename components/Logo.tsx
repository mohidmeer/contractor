import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='w-fit flex items-centerflex-col'>
            <div className="bg-primary p-4">
                <Image
                    src="/images/logo.png"
                    alt="Total Care logo"
                    width={180}
                    height={80}
                />
            </div>

        </div>
    )
}
export default Logo