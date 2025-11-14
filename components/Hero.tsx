'use client';
import Image from "next/image";
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import Title from "./inputs/Title";
import HeroForm from "./HeroForm";
import { contactInfo, landingPage, siteName } from "@/data";
import { trackCallClick } from "@/lib/analytics";

const Hero = () => {
    return (
        <section className="h-[90vh] relative select-none">
            <div className="absolute inset-0  bg-black/20  clip-diagnol backdrop-blur-xs" />
            <Image src={landingPage.hero.backgroundImage} alt="total_care_hero_img" fill className="object-cover -z-10  " sizes="(min-width: 1024px) 90vw, 100vw" />
            <div className="md:grid-cols-2 grid z-10 relative h-full container mx-auto w-full p-4" >
                <div className="z-10 w-full  text-white mx-auto h-full flex flex-col justify-center">
                    <div className="flex flex-col gap-4 ">
                        <Title text={siteName} />
                        <h1>
                            {landingPage.hero.title}
                        </h1>
                        <p className="p1">{landingPage.hero.description}</p>
                        <div className="flex items-center gap-6">
                            <a href={contactInfo.phone.href} className='flex gap-2 btn-primary' onClick={trackCallClick('Hero Call Button')}>
                                <BsFillTelephoneFill size={20} className='' />
                                {contactInfo.phone.text}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-full flex flex-col justify-center ">
                    <div className="mx-auto w-full  max-w-xl">
                        <HeroForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
