import Image from "next/image";
import Title from "./inputs/Title"
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { servicesData } from "@/data/services";
import ArrowLink from "./inputs/ArrowLink";


const Services = () => {
    return (
        <section className="co p-2 mx-auto">
            <div className="text-center flex items-center justify-center flex-col gap-2">
                <Title text={'What We Do'} />
                <h2 className="text-heading">
                    Explore Our Roofing Solutions
                </h2>
            </div>

            <div className="grid grid-cols-4 gap-1 my-10">
                {Object.entries(servicesData).splice(0, 8).map(([slug, i], z) => (
                    <div className="text-white cursor-pointer" key={slug}>
                        <div className="h-[500px] relative group flex flex-col p-10  hover:bg-black/90 transition-all bg-black/70 overflow-hidden">
                            <p className="text-3xl font-bold">{z + 1}.</p>
                            <div className="mt-auto flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">{i.title}</h3>
                                <p className="text-lg">{i.description}</p>
                                <Link
                                    href={`/services/${slug}`}
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
            <div className="flex items-center  justify-center">
                <ArrowLink label="View More" href="/services"></ArrowLink>
            </div>
        </section>
    )
}

export default Services
