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
    <main className="flex flex-col gap-20">
      <Header cta title={service.title} desc={service.description} />

      <section className="container mx-auto w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-8 xl:col-span-9 flex flex-col gap-10">
            {service.imageUrl && (
              <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-primary/5 sm:aspect-[2.4/1]">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            <div className="rounded-xl bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
              <div className="mb-8 max-w-3xl">
                {service.category && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {service.category.name}
                  </p>
                )}
                <h2 className="text-heading mb-6">{service.label}</h2>
                <div className="space-y-5">
                  {paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-[1.8] text-gray-700 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {service.benefitsOFChoosing.length > 0 && (
                <div className="border-t border-primary/10 pt-10">
                  <div className="mb-6 flex flex-col gap-2">
                    <Title text="Why it matters" />
                    <h3 className="text-heading !text-2xl sm:!text-3xl">
                      Key benefits
                    </h3>
                  </div>
                  <ul className="grid gap-5 sm:grid-cols-2">
                    {service.benefitsOFChoosing.map((benefit, z) => (
                      <li
                        key={z}
                        className="flex gap-3 rounded-lg bg-secondary/5 p-5"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <FaCheck size={12} />
                        </span>
                        <div className="min-w-0">
                          <h4 className="mb-1 text-base font-semibold text-heading">
                            {benefit.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-gray-600 sm:text-[15px]">
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
                    <h3 className="text-heading !text-2xl sm:!text-3xl">
                      {service.typeOfSolutions.headings}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2.5">
                    {service.typeOfSolutions.types.map((type, z) => (
                      <li
                        key={z}
                        className="rounded-md border border-primary/15 bg-secondary/5 px-4 py-2 text-sm font-medium text-heading"
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {galleryImages.length > 0 && (
              <div className="rounded-xl bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
                <div className="mb-6 flex flex-col gap-2">
                  <Title text="Gallery" />
                  <h3 className="text-heading !text-2xl sm:!text-3xl">
                    What our work looks like
                  </h3>
                </div>
                <Gallery images={galleryImages} />
              </div>
            )}
          </article>

          <aside className="hidden h-fit flex-col gap-6 lg:col-span-4 xl:col-span-3 lg:flex">
            <SideBar />
          </aside>
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
