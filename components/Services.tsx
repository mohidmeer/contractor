import Image from "next/image";
import Title from "./inputs/Title";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { landingPage } from "@/data";
import { getServices } from "@/actions/services";

type ServicesProps = {
  limit?: number;
};

const Services = async ({ limit = 6 }: ServicesProps) => {
  const services = await getServices();
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-secondary/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Title text={"What We Do"} />
            <h2 className="text-heading">{landingPage.services.heading}</h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all w-fit"
          >
            View all
            <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((service, z) => (
            <Link
              href={`/services/${service.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-primary hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              key={service.slug}
            >
              <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={service.title}
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-primary/40 px-6 text-center">
                    {service.label}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30 group-hover:bg-white group-hover:text-primary transition-colors">
                    {String(z + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col gap-3 p-4 md:p-5">
                <p className="p1 !text-gray-600 line-clamp-2 group-hover:!text-white/90 transition-colors">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-1">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-secondary group-hover:gap-2.5 transition-all">
                    Learn more
                    <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="h-8 w-8 rounded-full bg-primary/10 group-hover:bg-white/15 flex items-center justify-center text-primary group-hover:text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <MdArrowForward className="text-sm" />
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
