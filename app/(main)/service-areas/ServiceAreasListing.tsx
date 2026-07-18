import Link from "next/link";
import { MdArrowForward, MdLocationPin } from "react-icons/md";
import Title from "@/components/inputs/Title";
import { serviceAreaPage, serviceAreasData } from "@/data";

function cityMapEmbedUrl(cityName: string) {
  const query = encodeURIComponent(`${cityName}, Florida, USA`);
  return `https://maps.google.com/maps?q=${query}&z=11&output=embed`;
}

/** Service-areas listing page only — do not reuse on other pages. */
export default function ServiceAreasListing() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative mb-10 md:mb-12 max-w-2xl overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 -top-4 select-none text-[clamp(2.75rem,9vw,5rem)] font-bold leading-none tracking-tight text-primary/[0.06]"
          >
            Areas
          </span>
          <div className="relative pt-5 flex flex-col gap-2">
            <Title text="Service Areas" />
            <h2 className="text-heading">{serviceAreaPage.seo.title}</h2>
            <p className="p1">{serviceAreaPage.seo.description}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {serviceAreasData.map((city, index) => {
            const slug = city.href.replace(/^\/+/, "");
            return (
              <Link
                key={city.href + index}
                href={`/service-areas/${slug}`}
                className="group relative flex min-h-[260px] overflow-hidden rounded-2xl bg-heading shadow-md hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <iframe
                  title={`Map of ${city.name}, Florida`}
                  src={cityMapEmbedUrl(city.name)}
                  className="absolute inset-0 h-full w-full border-0 pointer-events-none scale-[1.02] transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden
                  tabIndex={-1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading via-heading/45 to-heading/5 opacity-90 group-hover:opacity-95 transition-opacity" />

                <div className="relative z-[1] mt-auto flex w-full flex-col gap-2 p-5 md:p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:bg-white group-hover:text-primary transition-colors">
                    <MdLocationPin className="text-lg" />
                  </span>
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">
                        Florida
                      </p>
                      <h3 className="!text-white font-bold text-lg md:text-xl leading-snug">
                        {city.name}
                      </h3>
                      <p className="mt-1 text-sm font-light text-white/80 line-clamp-2">
                        {city.description}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <MdArrowForward className="text-base" />
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
