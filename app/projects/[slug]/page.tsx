import Process from '@/app/_components/Process'
import Projects from '@/app/_components/Projects'
import Testimonials from '@/app/_components/Testimonials'
import AreaOfServices from '@/components/AreaOfServices'
import FAQs from '@/components/Faqs'
import Gallery from '@/components/Gallery'
import GoogleMap from '@/components/GoogleMap'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import SideBar from '@/components/SideBar'
import WhyUS from '@/components/WhyUS'
import { projectsImageGallery, siteLogo, siteName, siteUrl } from '@/data'
import { projectsData } from '@/data'
import { BUSINESS_ID } from '@/jsonld'
import { notFound } from 'next/navigation'
import { FaCircle } from 'react-icons/fa6'
import { MdLocationPin, MdTimelapse } from 'react-icons/md'


type Props = {
  params: Promise<{ slug: string }>;
};

type ProjectSlug = keyof typeof projectsData;

export async function generateStaticParams() {
  return Object.keys(projectsData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params

  const project = projectsData[slug as ProjectSlug];

  const canonical = `${siteUrl}projects/${slug}`
  return {
    title: `${project.title} | ${siteName}`,
    description: project.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: project.title,
      description: project.description,
      url: canonical,
      images: [siteUrl + project.image],
    },

    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [siteUrl + project.image],
    },

  }
}

export default async function page({ params }: Props) {

  const { slug } = await params

  const project = projectsData[slug as ProjectSlug];

  if (!project) return notFound()

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    provider: { "@id": BUSINESS_ID },
    url: `${siteUrl}/projects/${slug}`,
    image: siteUrl + project.image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/projects/${slug}`
    }
  }

  return (
    <main className="flex flex-col gap-20">
      <Header cta title={project.title} desc={project.description} />
      <section className='xl:container mx-auto w-full '>
        <div className='lg:grid-cols-4 grid gap-10 p-4'>
          <div className=' col-span-3 flex flex-col gap-10 '>
            <div className='bg-white p-10  rounded-md flex-col gap-6 h-fit shadow-md card flex  '>
              <div className='flex items-center gap-6 '>
                <p className='flex items-center gap-1'><MdLocationPin size={24} className='text-primary' /> <span className='font-bold'>{project.location}</span></p>
                <p className='flex items-center gap-1'><MdTimelapse size={24} className='text-primary' /> <span className='font-bold'>{project.duration}</span></p>
              </div>
              <h2 className='text-heading'>{project.label}</h2>
              <p className='text-lg'>{project.content}</p>

              <h3 className='text-heading'>Material Used</h3>

              <div className='grid grid-cols-2'>
                {
                  project.materials.map((i, z) => (
                    <p className=' text-lg flex items-center gap-2' key={z}>
                      <FaCircle size={10} className='text-primary' /> {i}
                    </p>
                  ))
                }

              </div>



            </div>
            <div className='bg-white card p-10  rounded-md flex-col gap-6 '>
              <h3 className='text-heading mb-6 flex items-center gap-4'>Image Gallery <span className='text-base text-gray-700'> (Reference Only)</span> </h3>
              <Gallery images={projectsImageGallery} />
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
      <FAQs />
      <AreaOfServices />
      <GoogleMap />
      <JsonLd data={jsonLdData} />
    </main>
  )
}