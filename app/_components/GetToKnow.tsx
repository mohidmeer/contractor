import Title from '@/components/inputs/Title'
import { contactInfo, getToKnow } from '@/data/constants'
import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaCheckSquare } from 'react-icons/fa'

const GetToKnow = () => {
    return (
        <section className="bg-pattren">
            <div className='container mx-auto '>
                <div className="grid grid-cols-2 gap-10 py-10">
                    <div className="flex flex-col gap-6 justify-center sm:p-8 bg-white rounded-lg ">
                        <Title text={getToKnow.title} />
                        <h2 className="text-heading">
                            {getToKnow.heading}
                        </h2>
                        <p className="p1">
                           {getToKnow.description}
                        </p>
                        <div className="space-y-4">

                            {
                                getToKnow.keyPoints.map((i, z) => (

                                    <div className="flex gap-2" key={z}>
                                        <FaCheckSquare size={26} className="text-green-700 mt-2" />
                                        <div>
                                            <p className="font-semibold text-2xl text-heading">{i.title}</p>
                                            <p className="p1">{i.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        
                        <div className="flex gap-10 items-center">
                            <a href={contactInfo.phone.href} className='flex gap-2 items-center text-heading text-4xl hover:scale-125 transition-all'>
                                <BsFillTelephoneFill size={36} className='' />
                                {contactInfo.phone.text}
                            </a>
                            <div className="bg-secondary text-white flex gap-4 p-2 rounded-sm">
                                <p className="text-7xl font-bold">10</p>
                                <p className="text-2xl">Years of <br /> Experience</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full relative p-2">
                        <div className="flex gap-6 flex-wrap">
                            <div className="relative h-[300px]  border rounded-md overflow-hidden w-1/2">
                                <Image
                                    src={getToKnow.image1_url}
                                    alt="Roof 2"
                                    fill
                                    className="object-cover  hover:scale-110 transition-all "
                                />
                            </div>


                            <div className=" relative h-[400px] w-[calc(50%-12px)] border rounded-md overflow-hidden">
                                <Image
                                    src={getToKnow.image1_url}
                                    alt="Roof 1"
                                    fill
                                    className="object-cover  hover:scale-110 transition-all"
                                />
                            </div>
                            <div className=" relative h-[500px] w-[calc(50%-12px)] -translate-y-20 border rounded-md overflow-hidden">
                                <Image
                                    src={getToKnow.image1_url}
                                    alt="Roof 1"
                                    fill
                                    className="object-cover  hover:scale-110 transition-all"
                                />
                            </div>



                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default GetToKnow
