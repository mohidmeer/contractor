'use client';
import Title from "@/components/inputs/Title";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { landingPage, projectsData } from "@/data";
import AutoScroll from 'embla-carousel-auto-scroll'

const Projects = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, speed: 0.5 })
    ])
    return (
        <section className="py-20  ">
            <div className="text-center flex items-center justify-center flex-col gap-2 mb-10">
                <Title text={'Our Projects'} />
                <h2 className="text-heading">
                    {landingPage.projects.heading}
                </h2>
            </div>
            <div className="embla my-6" ref={emblaRef}>
                <div className="embla__container flex gap-6 px-2">
                    {Object.entries(projectsData).map(([slug, i], z) => (
                        <div className="flex-[0_0_100%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_25%]" key={slug}>
                            <Link
                                href={`/projects/${slug}`}
                                className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/10 hover:border-primary/30 block h-full"
                                aria-label={`Continue reading :${i.title}`}
                            >
                                {/* Image Section */}
                                <div className="relative h-[280px] overflow-hidden">
                                    <Image
                                        src={i.image}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={i.title}
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                        {z + 1}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col gap-4">
                                    <h3 className="text-heading text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
                                        {i.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                                        {i.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-semibold mt-2 group-hover:gap-4 transition-all">
                                        <span>Continue reading</span>
                                        <MdArrowForward className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}


                </div>
            </div>



        </section>
    )
}

export default Projects

