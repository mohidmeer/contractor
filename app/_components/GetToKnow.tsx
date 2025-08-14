'use client';
import Title from '@/components/inputs/Title'
import { contactInfo, getToKnow } from '@/data'
import { trackCallClick } from '@/lib/analytics'
import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaCheckSquare } from 'react-icons/fa'

const GetToKnow = ({ description = getToKnow.description }: { description?: string }) => {
    return (
        <section className="bg-pattren">
            <div className='xl:container mx-auto p-2'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className="flex flex-col gap-6 justify-center sm:p-8 bg-white rounded-lg  card p-4">
                        <Title text={getToKnow.title} />
                        <h2 className="text-heading">
                            {getToKnow.heading}
                        </h2>
                        <p className="p1">
                            {description}
                        </p>
                        <div className="space-y-4">
                            {
                                getToKnow.keyPoints.map((i, z) => (

                                    <div className="flex gap-2" key={z}>
                                        <FaCheckSquare size={26} className="text-green-700 mt-2  shrink-0" />
                                        <div>
                                            <h3 className="font-semibold md:!text-2xl text-heading">{i.title}</h3>
                                            <p className="p1">{i.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex xl:flex-row flex-col gap-6 items-center">
                           
                            <a onClick={trackCallClick('Get To Know Call Button')} href={contactInfo.phone.href} className='group flex gap-2 items-center text-heading text-[clamp(2rem,2vw,5rem)]  whitespace-nowrap hover:scale-125 transition-all'>
                                <BsFillTelephoneFill size={36} className='group-hover:animate-spin' />
                                {contactInfo.phone.text}
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-2 relative rounded-md overflow-hidden min-h-[500px]'>
                        <div className='absolute bg-white text-white inset-0  flex items-center justify-center '>
                            <div className='bg-primary z-10 rounded-full size-52 relative flex flex-col gap-1 items-center justify-center border-white border-[8px] '>
                                <p className="text-[clamp(4rem,4vw,6rem)] font-bold leading-14">10</p>
                                <p className="text-center font-semibold text-lg leading-5">Years of <br/>Experience</p>
                            </div>
                        </div>
                        <div className='relative rounded-md border p-2 overflow-hidden card'>
                            <Image
                                src={getToKnow.image1_url}
                                alt="Roof 2"
                                fill
                                className="object-cover rounded-md   hover:scale-110 transition-all "
                            />
                        </div>
                        <div className='relative  rounded-md border p-2 overflow-hidden card'>
                            <Image
                                src={getToKnow.image2_url}
                                alt="Roof 2"
                                fill
                                className="object-cover  hover:scale-110 transition-all "
                            />
                        </div>
                        <div className='relative  rounded-md border p-2 overflow-hidden card'>
                            <Image
                                src={getToKnow.image3_url}
                                alt="Roof 2"
                                fill
                                className="object-cover  hover:scale-110 transition-all "
                            />
                        </div>
                        <div className='relative  rounded-md border p-2 overflow-hidden card'>
                            <Image
                                src={getToKnow.image4_url}
                                alt="Roof 2"
                                fill
                                className="object-cover  hover:scale-110 transition-all "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetToKnow
