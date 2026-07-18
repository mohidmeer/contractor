'use client';
import SectionShadowHeading from '@/components/SectionShadowHeading'
import { contactInfo, getToKnow } from '@/data'
import { trackCallClick } from '@/lib/analytics'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaCheckSquare } from 'react-icons/fa'
import { MdArrowForward } from 'react-icons/md'

const GetToKnow = ({ description = getToKnow.description }: { description?: string }) => {
    return (
        <section className="bg-white py-14 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    <div className="flex flex-col gap-3.5 justify-center rounded-2xl bg-secondary/10 p-5 sm:p-6 pt-7 sm:pt-8 border border-primary/5 shadow-md">
                        <SectionShadowHeading shadow={getToKnow.title}>
                            <h2 className="text-heading">
                                {getToKnow.heading}
                            </h2>
                        </SectionShadowHeading>
                        <p className="p1">
                            {description}
                        </p>
                        <div className="space-y-2.5">
                            {
                                getToKnow.keyPoints.map((i, z) => (
                                    <div className="flex gap-2.5" key={z}>
                                        <FaCheckSquare size={16} className="text-green-700 mt-0.5 shrink-0" />
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm md:text-base font-bold text-heading leading-snug">{i.title}</h3>
                                            <p className="text-sm font-light text-gray-600 leading-relaxed">{i.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-wrap items-center gap-3 pt-1">
                            <a
                                onClick={trackCallClick('Get To Know Call Button')}
                                href={contactInfo.phone.href}
                                className="btn-primary inline-flex items-center gap-2 text-sm !px-5 !py-2.5 hover:scale-105"
                            >
                                <BsFillTelephoneFill size={16} />
                                {contactInfo.phone.text}
                            </a>
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-1.5 rounded-sm border border-primary/20 bg-white px-5 py-2.5 text-sm font-semibold text-heading hover:border-primary hover:text-primary hover:gap-2.5 transition-all"
                            >
                                More about us
                                <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 relative rounded-2xl overflow-hidden max-w-md sm:max-w-lg lg:max-w-none mx-auto w-full">
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
