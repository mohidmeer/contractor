'use client';
import Title from "@/components/inputs/Title";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { projectsData } from "@/sites/roofing/projects";
import AutoScroll from 'embla-carousel-auto-scroll'
import { pages } from "@/sites/roofing/constants";

const Projects = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, speed: 0.5 })
    ])
    return (
        <section className="bg-white py-20 shadow-md ">
            <div className="text-center flex items-center justify-center flex-col gap-2 mb-10">
                <Title text={'Roofing Projects'} />
                <h2 className="text-heading">
                    {pages.landing.projects.heading}
                </h2>
            </div>
            <div className="embla my-6" ref={emblaRef}>
                <div className="embla__container flex gap-1">
                    {Object.entries(projectsData).map(([slug, i], z) => (
                        <div className="text-white cursor-pointer flex-[0_0_25%]" key={slug}>
                            <div className="h-[500px] relative group flex flex-col p-10  hover:bg-black/90 transition-all bg-black/70 overflow-hidden">
                                <p className="text-3xl font-bold">{z + 1}.</p>
                                <div className="mt-auto flex flex-col gap-4">
                                    <h3 className="text-2xl font-semibold">{i.title}</h3>
                                    <p className="text-lg">{i.description}</p>
                                    <Link
                                        href={`/projects/${slug}`}
                                        className="text-xl flex items-center gap-2 font-bold group"
                                    >
                                        <p className="font-bold">Continue reading</p>
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
    )
}

export default Projects

