import { contactInfo, pages, } from "@/data/constants";
import Image from "next/image";
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import Title from "./inputs/Title";
import HeroForm from "./HeroForm";

const Hero = () => {
    return (
        <section className="h-[90vh] relative select-none">
            <div className="absolute inset-0  bg-black/20  sm:card backdrop-blur-sm" />
            <Image src={pages.landing.hero.backgroundImage} alt="total_care_hero_img" fill className="object-cover -z-10  " />
            <div className="md:grid-cols-2 grid z-10 relative h-full container mx-auto w-full p-4" >
                <div className="z-10 w-full  text-white mx-auto h-full flex flex-col justify-center">
                <div className="flex flex-col gap-4 ">
                    <Title text="Total Care Services" />
                    <h1>
                        {pages.landing.hero.title}
                    </h1>
                    <p className="text-lg">{pages.landing.hero.description}</p>
                    <div className="flex items-center gap-6">
                        <a href={contactInfo.phone.href} className='flex gap-2 btn-primary'>
                            <BsFillTelephoneFill size={20} className='' />
                            {contactInfo.phone.text}
                        </a>
                    </div>
                </div>
                </div>
                <div className="h-full flex flex-col justify-center ">
                    <div className="mx-auto w-full  max-w-xl">
                        <HeroForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
