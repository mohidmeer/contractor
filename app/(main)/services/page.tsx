import Header from "@/components/Header";
import Title from "@/components/inputs/Title";
import { servicesPage } from "@/data";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FAQs from "@/components/Faqs";
import AreaOfServices from "@/components/AreaOfServices";
import Projects from "@/app/_components/Projects";
import Process from "@/app/_components/Process";
import { MdArrowForward } from "react-icons/md";
import { getServices } from "@/actions/services";
import { getJsonLdDataServices } from "@/actions/catalogJsonLd";

const page = async () => {
  const services = await getServices();
  const jsonLdData = await getJsonLdDataServices();

  return (
    <main className="flex flex-col gap-20">
      <Header
        cta={true}
        desc={servicesPage.seo.description}
        title={servicesPage.seo.title}
      />

      <section className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-3 mb-14">
          <Title text="Our Services" />
          <h2 className="text-heading">What we deliver</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {servicesPage.seo.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="moving-border group flex h-full flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={service.title}
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-primary/40 px-6 text-center">
                    {service.label}
                  </div>
                )}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                {service.category && (
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {service.category.name}
                  </p>
                )}
                <h3 className="text-heading text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                  {service.label}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 flex-1">
                  {service.description}
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  <span>View service</span>
                  <MdArrowForward className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Projects />
      <Process />
      <FAQs />
      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
};

export default page;
