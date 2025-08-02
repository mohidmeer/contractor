import Image from "next/image";
import Title from "./inputs/Title"
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { servicesData } from "@/data/services";
import ArrowLink from "./inputs/ArrowLink";
import { pages } from "@/data/constants";


const Services = () => {
    return (
        <section className="co p-2 mx-auto">
            <div className="text-center flex items-center justify-center flex-col gap-2">
                <Title text={'What We Do'} />
                <h2 className="text-heading">
                    {pages.landing.services.heading}
                </h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 my-10 p-2 transition-all">
                {Object.entries(servicesData).splice(0, 8).map(([slug, i], z) => (
                    <div className="text-white cursor-pointer" key={slug}>
                        <div className="h-[500px] relative group flex flex-col p-10  hover:bg-black/50 transition-all bg-black/30 overflow-hidden">
                            <p className="text-3xl font-bold">{z + 1}.</p>
                            <div className="mt-auto flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold  text-shadow-2xs">{i.title}</h3>
                                <p className="text-lg">{i.description}</p>
                                <Link
                                    href={`/services/${slug}`}
                                    className="text-xl flex items-center gap-2 font-bold group"
                                    aria-label={`Continue reading :${i.title}`}
                                >
                                    <p className="font-bold">Continue reading</p>
                                    <MdArrowForward className="group-hover:translate-x-6 transition-all" />
                                </Link>
                            </div>
                            <Image
                                src={i.image}
                                fill
                                 sizes="300px"
                                className="-z-5 group-hover:scale-110 transition-all"
                                style={{ objectFit: "cover" }}
                                alt="service"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center  justify-center">
                <ArrowLink label="View More" href="/services"></ArrowLink>
            </div>
        </section>
    )
}

export default Services
