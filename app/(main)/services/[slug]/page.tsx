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
import Title from "@/components/inputs/Title";
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
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <article className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                    {service.category && (
                      <span className="inline-block mb-2 rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {service.category.name}
                      </span>
                    )}
                    <h2 className="!text-white font-bold text-xl sm:text-2xl drop-shadow-md max-w-2xl">
                      {service.label}
                    </h2>
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-md">
                {!service.imageUrl && (
                  <div className="mb-6 max-w-3xl">
                    {service.category && (
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {service.category.name}
                      </p>
                    )}
                    <h2 className="text-heading mb-4">{service.label}</h2>
                  </div>
                )}
                <div className="space-y-4 max-w-3xl">
                  {paragraphs.map((paragraph, i) => (
                    <p key={i} className="p1">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {service.benefitsOFChoosing.length > 0 && (
                  <div className="mt-10 border-t border-primary/10 pt-10">
                    <div className="mb-6 flex flex-col gap-2">
                      <Title text="Why it matters" />
                      <h3 className="text-heading">Key benefits</h3>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {service.benefitsOFChoosing.map((benefit, z) => (
                        <li
                          key={z}
                          className="group relative overflow-hidden flex gap-3 rounded-2xl bg-secondary/10 p-5 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/25">
                            <FaCheck size={14} />
                          </span>
                          <div className="min-w-0">
                            <h4 className="mb-1 text-base font-bold text-heading group-hover:text-primary transition-colors">
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
                    <div className="mb-6 flex flex-col gap-2">
                      <Title text="Applications" />
                      <h3 className="text-heading">
                        {service.typeOfSolutions.headings}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2.5">
                      {service.typeOfSolutions.types.map((type, z) => (
                        <li
                          key={z}
                          className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-2.5 text-sm font-semibold text-heading hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
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
                  <div className="mb-6 flex flex-col gap-2">
                    <Title text="Gallery" />
                    <h3 className="text-heading">
                      What our work looks like
                    </h3>
                  </div>
                  <Gallery images={galleryImages} />
                </div>
              )}
            </article>

            <aside className="hidden h-fit flex-col gap-5 lg:col-span-5 xl:col-span-4 lg:flex lg:sticky lg:top-28">
              <SideBar />
            </aside>
          </div>
        </div>
      </section>

      <Process />
      <WhyUS />
      <Projects />
      <Testimonials />
      <FAQs faqItems={service.faqs} />
      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
}
