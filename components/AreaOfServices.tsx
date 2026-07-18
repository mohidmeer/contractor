import React from "react";
import { MdLocationPin } from "react-icons/md";
import { serviceAreasData } from "@/data";
import Link from "next/link";
import Title from "@/components/inputs/Title";

const AreaOfServices = () => {
  return (
    <section className="bg-secondary/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center flex items-center justify-center flex-col gap-2 mb-10 md:mb-12 max-w-2xl mx-auto">
          <Title text="Locations" />
          <h2 className="text-heading">Cities We Serve Across Florida</h2>
          <p className="p1 max-w-xl">
            Explore our service areas and find expert solutions near you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {serviceAreasData.map((city, index) => (
            <Link
              key={index}
              href={"/service-areas/" + city.href}
              className="rounded-2xl p-4 md:p-5 bg-white border border-primary/5 shadow-sm hover:shadow-md hover:bg-white hover:border-primary/15 transition-all flex items-center gap-3 text-base font-semibold text-heading"
            >
              <span className="rounded-xl bg-primary/10 p-2 shrink-0">
                <MdLocationPin className="text-primary text-lg" />
              </span>
              <span>{city.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfServices;
