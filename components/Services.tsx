import Image from "next/image";
import Title from "./inputs/Title"
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import ArrowLink from "./inputs/ArrowLink";
import { landingPage, servicesData } from "@/data";



const Services = () => {
    return (
        <section className="co p-2 mx-auto">
            <div className="text-center flex items-center justify-center flex-col gap-2">
                <Title text={'What We Do'} />
                <h2 className="text-heading">
                    {landingPage.services.heading}
                </h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 my-10 p-2 transition-all">
                {Object.entries(servicesData).splice(0, 8).map(([slug, i], z) => (
                    <Link
                        href={`/services/${slug}`}
                        className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/10 hover:border-primary/30"
                        key={slug}
                    >
                        {/* Image Section */}
                        <div className="relative h-[280px] overflow-hidden">
                            <Image
                                src={i.image}
                                fill
                                sizes="300px"
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
                ))}
            </div>
            <div className="flex items-center  justify-center">
                <ArrowLink label="View More" href="/services"></ArrowLink>
            </div>
        </section>
    )
}

export default Services
