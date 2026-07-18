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
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    <div className="flex flex-col gap-5 justify-center sm:p-7  rounded-2xl card p-5 border border-primary/5 shadow-md">
                        <Title text={getToKnow.title} />
                        <h2 className="text-heading">
                            {getToKnow.heading}
                        </h2>
                        <p className="p1">
                            {description}
                        </p>
                        <div className="space-y-3.5">
                            {
                                getToKnow.keyPoints.map((i, z) => (
                                    <div className="flex gap-3" key={z}>
                                        <FaCheckSquare size={18} className="text-green-700 mt-0.5 shrink-0" />
                                        <div className="space-y-0.5">
                                            <h3 className="font-bold text-heading leading-snug">{i.title}</h3>
                                            <p className="p1">{i.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex xl:flex-row flex-col gap-4 items-center pt-1">
                            <a
                                onClick={trackCallClick('Get To Know Call Button')}
                                href={contactInfo.phone.href}
                                className="group flex gap-2 items-center text-heading text-[clamp(1.35rem,1.8vw,1.875rem)] font-bold whitespace-nowrap hover:scale-105 transition-all"
                            >
                                <BsFillTelephoneFill size={22} className="" />
                                {contactInfo.phone.text}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] max-w-md lg:max-w-none mx-auto w-full">
                        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                            <div className="bg-primary text-white rounded-full size-28 sm:size-32 relative flex flex-col gap-0.5 items-center justify-center border-white border-[5px] shadow-lg">
                                <p className="text-3xl sm:text-4xl font-bold leading-none">10</p>
                                <p className="text-center font-medium text-[11px] sm:text-xs leading-3.5">Years of <br />Experience</p>
                            </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden aspect-square">
                            <Image
                                src={getToKnow.image1_url}
                                alt="Company work 1"
                                fill
                                className="object-cover hover:scale-110 transition-all duration-500"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden aspect-square">
                            <Image
                                src={getToKnow.image2_url}
                                alt="Company work 2"
                                fill
                                className="object-cover hover:scale-110 transition-all duration-500"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden aspect-square">
                            <Image
                                src={getToKnow.image3_url}
                                alt="Company work 3"
                                fill
                                className="object-cover hover:scale-110 transition-all duration-500"
                            />
                        </div>
                        <div className="relative rounded-xl overflow-hidden aspect-square">
                            <Image
                                src={getToKnow.image4_url}
                                alt="Company work 4"
                                fill
                                className="object-cover hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetToKnow
