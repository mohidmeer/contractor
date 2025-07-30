import { contactInfo, pages, } from "@/data/constants";
import Image from "next/image";
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import Inspection from "./Inspection";
import Title from "./inputs/Title";

const Hero = () => {
    return (
        <section className="h-[90vh] relative select-none">
            <div className="absolute inset-0  bg-black/20  clip-diagonal backdrop-blur-sm" />
            <Image src={pages.landing.hero.backgroundImage} alt="total_care_hero_img" fill className="object-cover -z-10  " />
            <div className="container w-full  text-white mx-auto h-full flex flex-col justify-center items-">
                <div className="flex flex-col md:w-1/2 gap-4 z-10 ba">
                    <Title text="Total Care Services" />
                    <h1>
                        {pages.landing.hero.title}
                    </h1>
                    <p className="text-xl font-semibold">{pages.landing.hero.description}</p>
                    <div className="flex items-center gap-6">
                        <a href={contactInfo.phone.href} className='flex gap-2 btn-primary'>
                            <BsFillTelephoneFill size={20} className='' />
                            {contactInfo.phone.text}
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-26 left-1/2 transform -translate-x-1/2 w-full z-20  p-10 ">
                <Inspection />
            </div>
        </section>
    )
}
export default Hero
