import Process from "@/app/_components/Process";
import Projects from "@/app/_components/Projects";
import Testimonials from "@/app/_components/Testimonials";
import AreaOfServices from "@/components/AreaOfServices";
import FAQs from "@/components/Faqs";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import SideBar from "@/components/SideBar";
import WhyUS from "@/components/WhyUS";
import { siteName, siteUrl } from "@/data";
import { BUSINESS_ID } from "@/jsonld";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { getServiceBySlug, getServiceSlugs } from "@/actions/services";
import { toMediaUrl } from "@/lib/media";
import { asParagraphs } from "@/lib/paragraphs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  const canonical = `${siteUrl}services/${slug}`;
  const image = service.image ? toMediaUrl(service.image) : undefined;

  return {
    title: `${service.title} | ${siteName}`,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonical,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return notFound();

  const image = service.image ? toMediaUrl(service.image) : "";
  const paragraphs = asParagraphs(service.content);
  const lead = paragraphs[0];
  const rest = paragraphs.slice(1);
  const galleryImages = [
    ...(service.imageUrl ? [service.imageUrl] : []),
    ...service.imageUrls.filter((url) => url !== service.imageUrl),
  ];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    image,
    provider: { "@id": BUSINESS_ID },
    url: `${siteUrl}/services/${slug}`,
    mainEntityOfPage: `${siteUrl}/services/${slug}`,
  };

  return (
    <main className="flex flex-col">
      <Header cta title={service.title} desc={service.description} />

      <section className="bg-secondary/10 py-14 md:py-20">
        <div className="xl:container mx-auto w-full px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
            <article className="lg:col-span-3 flex flex-col gap-8">
              {service.imageUrl && (
                <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-primary/5 shadow-lg shadow-primary/10 sm:aspect-[2.4/1]">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/55 via-heading/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                    {service.category && (
                      <span className="inline-block mb-2 rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {service.category.name}
                      </span>
                    )}
                    <h2 className="!text-white font-bold text-xl sm:text-2xl drop-shadow-md max-w-3xl">
                      {service.label}
                    </h2>
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-md overflow-hidden relative">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/[0.04]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-10 bottom-24 h-32 w-32 rounded-full bg-secondary/20"
                  aria-hidden
                />

                {!service.imageUrl && (
                  <div className="mb-8 relative">
                    {service.category && (
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {service.category.name}
                      </p>
                    )}
                    <h2 className="text-heading mb-2">{service.label}</h2>
                    <span className="block h-1 w-16 rounded-full bg-secondary" />
                  </div>
                )}

                {service.description && (
                  <div className="relative mb-8 rounded-2xl border-l-4 border-primary bg-secondary/15 px-5 py-4 md:px-6 md:py-5">
                    <p className="text-base md:text-lg font-medium leading-relaxed text-heading">
                      {service.description}
                    </p>
                  </div>
                )}

                <div className="relative space-y-0">
                  {lead && (
                    <p className="p1 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold first-letter:text-5xl first-letter:leading-none first-letter:text-primary md:first-letter:text-6xl">
                      {lead}
                    </p>
                  )}

                  {rest.length > 0 && (
                    <div className="mt-8 grid gap-6 md:gap-8">
                      {rest.map((paragraph, i) => (
                        <div
                          key={i}
                          className="group grid grid-cols-[auto_1fr] gap-4 md:gap-5"
                        >
                          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            {String(i + 2).padStart(2, "0")}
                          </span>
                          <p className="p1 border-b border-primary/5 pb-6 group-last:border-0 group-last:pb-0">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {service.benefitsOFChoosing.length > 0 && (
                  <div className="mt-10 border-t border-primary/10 pt-10">
                    <div className="relative mb-6 overflow-hidden">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -left-1 -top-3 select-none text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-primary/[0.07]"
                      >
                        Benefits
                      </span>
                      <h3 className="relative !text-lg md:!text-xl font-bold text-heading pt-4">
                        Key benefits
                      </h3>
                    </div>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.benefitsOFChoosing.map((benefit, z) => (
                        <li
                          key={z}
                          className="group relative overflow-hidden flex gap-2.5 rounded-xl bg-secondary/10 p-4 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-white shadow-sm shadow-primary/20">
                            <FaCheck size={10} />
                          </span>
                          <div className="min-w-0">
                            <h4 className="mb-0.5 text-sm font-bold text-heading group-hover:text-primary transition-colors">
                              {benefit.title}
                            </h4>
                            <p className="text-sm font-light leading-relaxed text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.typeOfSolutions.types.length > 0 && (
                  <div className="mt-10 border-t border-primary/10 pt-10">
                    <div className="relative mb-6 overflow-hidden">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -left-1 -top-3 select-none text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-primary/[0.07]"
                      >
                        Applications
                      </span>
                      <h3 className="relative !text-lg md:!text-xl font-bold text-heading pt-4">
                        {service.typeOfSolutions.headings}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {service.typeOfSolutions.types.map((type, z) => (
                        <li
                          key={z}
                          className="rounded-lg bg-primary/5 border border-primary/10 px-3.5 py-2 text-sm font-semibold text-heading hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
                        >
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {galleryImages.length > 0 && (
                <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-md">
                  <div className="relative mb-6 overflow-hidden">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-1 -top-3 select-none text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-primary/[0.07]"
                    >
                      Gallery
                    </span>
                    <h3 className="relative !text-lg md:!text-xl font-bold text-heading pt-4">
                      What our work looks like
                    </h3>
                  </div>
                  <Gallery images={galleryImages} />
                </div>
              )}
            </article>

            <aside className="hidden h-fit flex-col gap-5 lg:flex lg:sticky lg:top-28">
              <SideBar />
            </aside>
          </div>
        </div>
      </section>

      <Process />
      <Projects />
      <WhyUS />
      <Testimonials />
      <FAQs faqItems={service.faqs} />
      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
}
