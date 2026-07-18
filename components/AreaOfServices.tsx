import React from "react";
import { MdArrowForward, MdLocationPin } from "react-icons/md";
import { serviceAreasData } from "@/data";
import Link from "next/link";

const AreaOfServices = () => {
  return (
    <section className="bg-secondary/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-2xl overflow-hidden bg-primary shadow-xl shadow-primary/20">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <div className="flex flex-col justify-center gap-4 px-8 py-10 md:px-10 md:py-12 text-white border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="flex items-center gap-1.5">
                <span className="bg-secondary w-6 h-1 block rounded-full" />
                <span className="font-bold text-white/95">Locations</span>
              </p>
              <h2 className="!text-white font-bold">
                Cities We Serve Across Florida
              </h2>
              <p className="text-base font-light text-white/85 leading-relaxed max-w-sm">
                Explore our service areas and find expert solutions near you.
              </p>
              <Link
                href="/service-areas"
                className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white/95 hover:gap-2.5 transition-all w-fit"
              >
                View all areas
                <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="bg-white/95 p-5 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3">
                {serviceAreasData.map((city, index) => (
                  <Link
                    key={index}
                    href={"/service-areas/" + city.href}
                    className="group flex items-center gap-2 rounded-xl border border-primary/10 bg-secondary/10 px-3 py-3 md:px-3.5 md:py-3.5 text-sm font-semibold text-heading hover:bg-primary hover:text-white hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MdLocationPin className="text-primary text-lg shrink-0 group-hover:text-white transition-colors" />
                    <span className="truncate">{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaOfServices;
