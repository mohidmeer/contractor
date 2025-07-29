import Process from '@/app/_components/Process';
import Projects from '@/app/_components/Projects';
import Testimonials from '@/app/_components/Testimonials';
import FAQs from '@/components/Faqs';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header'
import Services from '@/components/Services';
import SideBar from '@/components/SideBar';
import WhyUS from '@/components/WhyUS';
import { navItems, siteUrl } from '@/data/constants';
import { servicesData } from '@/data/services'
import Link from 'next/link';
import { notFound } from 'next/navigation'
import {  FaCheckSquare } from "react-icons/fa";
import { FaCircle } from 'react-icons/fa6';

export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const service = servicesData[slug]

   const canonical = `${siteUrl}projects/${slug}`
  return {
    title: service.title,
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

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) return notFound()



  return (
    <main className="flex flex-col gap-20">
      <Header cta title={service.title} desc={service.description} />
      <section className='container mx-auto w-full '>
        <div className='grid-cols-4 grid gap-10 p-4'>
          <div className='bg-white px-10 py-20 rounded-md flex-col gap-6 flex col-span-3  shadow-md'>
            <h2 className='text-heading'>{service.label}</h2>
            <p className='text-lg'>{service.content}</p>
            <h3 className='text-heading'>
              {service.typeOfSolutions.headings}
            </h3>
            <div className='grid grid-cols-2 '>
              {
               service.typeOfSolutions.types.map((i, z) => (
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
              <Gallery images={['hero_bg_1.jpg', 'about_img_2.jpg', 'after_img_1.jpg', 'roof_inspection.jpg', 'hero_bg_1.jpg', 'about_img_2.jpg', 'after_img_1.jpg', 'roof_inspection.jpg', 'hero_bg_1.jpg', 'about_img_2.jpg', 'after_img_1.jpg', 'roof_inspection.jpg']} />
            </div>
          </div>
          <div className='h-fit flex flex-col gap-8'>
            <SideBar/>
          </div>
        </div>
      </section>
      <Process/>
      <WhyUS />
      <Projects />
      <Testimonials />
      <FAQs />
      
    </main>
  )
}