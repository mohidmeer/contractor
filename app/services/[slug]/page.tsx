import Process from '@/app/_components/Process';
import Projects from '@/app/_components/Projects';
import Testimonials from '@/app/_components/testimonials';
import AreaOfServices from '@/components/AreaOfServices';
import FAQs from '@/components/Faqs';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd';
import SideBar from '@/components/SideBar';
import WhyUS from '@/components/WhyUS';
import { siteLogo, siteName, siteUrl } from '@/data/constants';
import { servicesData } from '@/data/services'
import { notFound } from 'next/navigation'
import { FaCheckSquare } from "react-icons/fa";
import { FaCircle } from 'react-icons/fa6';

type Props = {
  params:  Promise<{slug:string}>;
};

type ServiceSlug = keyof typeof servicesData;


export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params

  const service = servicesData[slug as ServiceSlug]

  const canonical = `${siteUrl}projects/${slug}`
  return {
    title: `${service.title} | ${siteName}`,
    description: service.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonical,
      images: [service.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const service = servicesData[slug as ServiceSlug]
  if (!service) return notFound()
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteName,
      "url": siteUrl,
      "image": siteLogo,
    },
    "areaServed": {
      "@type": "Place",
      "name": "Florida"
    },
    "url": `${siteUrl}/services/${slug}`,
    "mainEntityOfPage": `${siteUrl}/services/${slug}`,
  };
  return (
    <main className="flex flex-col gap-20">
      <Header cta title={service.title} desc={service.description} />
      <section className='lg:container mx-auto w-full '>
        <div className='grid-cols-1 lg:grid-cols-4 grid gap-10 p-4'>
          <div className='bg-white p-10  rounded-md flex-col gap-6 flex col-span-3  card'>
            <h2 className='text-heading'>{service.label}</h2>
            <p className='text-lg'>{service.content}</p>
            <h3 className='text-heading'>
              {service.typeOfSolutions.headings}
            </h3>
            <div className='grid grid-cols-2 '>
              {
                service.typeOfSolutions.types.map((i, z:number) => (
                  <p className=' text-lg flex items-center gap-2' key={z}>
                    <FaCircle size={10} className='text-primary' /> {i}
                  </p>
                ))
              }
            </div>
            <h3 className='text-heading'>
              Key Benefits
            </h3>
            <div className='grid grid-cols-1 gap-4 '>
              {
                service.benefitsOFChoosing.map((i, z) => (
                  <div className="flex gap-2" key={z}>
                    <FaCheckSquare size={20} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold !text-xl text-heading">{i.title}</h4>
                      <p className="">{i.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className=''>
              <h3 className='text-heading my-10'>What our work look like </h3>
              <Gallery images={service.images} />
            </div>
          </div>
          <div className='sr-only lg:not-sr-only md:flex md:flex-col h-fit gap-8'>
            <SideBar />
          </div>
        </div>
      </section>
      <Process />
      <WhyUS />
      <Projects />
      <Testimonials />
      <FAQs faqItems={service.faqs} />
      <AreaOfServices/>
      <JsonLd data={jsonLdData} />
    </main>
  )
}