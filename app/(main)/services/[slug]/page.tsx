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
import { FaCheckSquare } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
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
  const gallery_images = [
    ...(service.imageUrl ? [service.imageUrl] : []),
    ...service.imageUrls,
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
      <section className="lg:container mx-auto w-full">
        <div className="grid-cols-1 lg:grid-cols-4 grid gap-10 p-4">
          <div className="bg-white p-10 rounded-md flex-col gap-6 flex col-span-3 card">
            {service.category && (
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                {service.category.name}
              </p>
            )}
            <h2 className="text-heading">{service.label}</h2>
            <div className="space-y-4">
              {asParagraphs(service.content).map((paragraph, i) => (
                <p className="text-lg" key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="text-heading">Key Benefits</h3>
            <div className="grid grid-cols-2 gap-6">
              {service.benefitsOFChoosing.map((i, z) => (
                <div className="flex gap-2" key={z}>
                  <FaCheckSquare
                    size={20}
                    className="text-primary mt-1 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold !text-xl text-heading">{i.title}</h4>
                    <p className="text-base">{i.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-heading">{service.typeOfSolutions.headings}</h3>
              <div className="grid grid-cols-2">
                {service.typeOfSolutions.types.map((i, z) => (
                  <p className="text-lg flex items-center gap-2" key={z}>
                    <FaCircle size={10} className="text-primary" /> {i}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-heading my-10">What our work look like</h3>
              <Gallery images={gallery_images} />
            </div>
          </div>
          <div className="sr-only lg:not-sr-only md:flex md:flex-col h-fit gap-8">
            <SideBar />
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
