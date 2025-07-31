'use client';
import FAQs from '@/components/Faqs';
import Header from '@/components/Header'
import Title from '@/components/inputs/Title';
import WhyUS from '@/components/WhyUS';
import { projectsData } from '@/data/projects'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import Process from '../_components/Process';
import { pages } from '@/data/constants';
import JsonLd from '@/components/JsonLd';
import AreaOfServices from '@/components/AreaOfServices';
import GoogleMap from '@/components/GoogleMap';
import { JsonLdDataProjects } from '@/data/jsonld';

const Page = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, speed: 0.3 })
    ])
    const [emblaRef2] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, speed: 0.3, direction: 'backward' })
    ])
    return (
        <main className='flex flex-col gap-10 '>
            <Header cta desc='' title={pages.projects.seo.title} />
            <section className="">
                <div className="text-center flex items-center justify-center flex-col gap-2 mb-10">
                    <Title text={'Roofing Projects'} />
                    <h2 className="text-heading">
                        See How We’ve Transformed Roofs Across Florida
                    </h2>
                </div>
                <div className="embla my-6" ref={emblaRef}>
                    <div className="embla__container flex gap-1">
                        {Object.entries(projectsData).map(([slug, i], z) => (
                            <div className="text-white cursor-pointer flex-[0_0_100%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_25%]" key={slug}>
                                <div className="h-[500px] relative group flex flex-col p-10  hover:bg-black/90 transition-all bg-black/70 overflow-hidden">
                                    <p className="text-3xl font-bold">{z + 1}.</p>
                                    <div className="mt-auto flex flex-col gap-4">
                                        <h3 className="!text-2xl font-semibold">{i.title}</h3>
                                        <p className="text-lg">{i.description}</p>
                                        <Link
                                            href={`/projects/${slug}`}
                                            className="text-xl flex items-center gap-2 font-bold group"
                                        >
                                            <p className="font-bold">Read More</p>
                                            <MdArrowForward className="group-hover:translate-x-6 transition-all" />
                                        </Link>
                                    </div>
                                    <Image
                                        src={i.image}
                                        fill
                                        className="-z-5 group-hover:scale-110 transition-all"
                                        style={{ objectFit: "cover" }}
                                        alt="service"
                                    />
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
                <div className="embla my-6" ref={emblaRef2}>
                    <div className="embla__container flex gap-1">
                        {Object.entries(projectsData).map(([slug, i], z) => (
                            <div className="text-white cursor-pointer flex-[0_0_100%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_25%]" key={slug}>
                                <div className="h-[500px] relative group flex flex-col p-10  hover:bg-black/90 transition-all bg-black/70 overflow-hidden">
                                    <p className="text-3xl font-bold">{z + 1}.</p>
                                    <div className="mt-auto flex flex-col gap-4">
                                        <h3 className="!text-2xl font-semibold">{i.title}</h3>
                                        <p className="text-lg">{i.description}</p>
                                        <Link
                                            href={`/projects/${slug}`}
                                            className="text-xl flex items-center gap-2 font-bold group"
                                        >
                                            <p className="font-bold">Read More</p>
                                            <MdArrowForward className="group-hover:translate-x-6 transition-all" />
                                        </Link>
                                    </div>
                                    <Image
                                        src={i.image}
                                        fill
                                        className="-z-5 group-hover:scale-110 transition-all"
                                        style={{ objectFit: "cover" }}
                                        alt="service"
                                    />
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
            <WhyUS />
            <Process />
            <FAQs />
            <AreaOfServices />
            <GoogleMap />
            <JsonLd data={JsonLdDataProjects} />
        </main>
    )
}

export default Page
