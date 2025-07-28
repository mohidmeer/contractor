import Process from '@/app/_components/Process'
import Projects from '@/app/_components/Projects'
import Testimonials from '@/app/_components/Testimonials'
import FAQs from '@/components/Faqs'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import WhyUS from '@/components/WhyUS'
import { navItems } from '@/data/constants'
import { projectsData } from '@/data/projects'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaCircle  } from 'react-icons/fa6'
import { MdLocationPin, MdTimelapse } from 'react-icons/md'

export async function generateStaticParams() {
  return Object.keys(projectsData).map(slug => ({ slug }))
}

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projectsData[slug]

  if (!project) return notFound()

  return (
    <main className="flex flex-col gap-20">
      <Header cta title={project.title} desc={project.description} />
      <section className='container mx-auto w-full '>
        <div className='grid-cols-4 grid gap-10 p-4'>
          <div className='bg-white px-10 py-16 rounded-md flex-col gap-6 flex col-span-3'>
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




            <div className=''>
              <h3 className='text-heading my-10'>Project Images</h3>
              <Gallery images={project.images} />
            </div>
          </div>

          <div className='h-fit flex flex-col gap-8'>
            <div className='bg-white p-5'>
              <h4 className='!text-xl font-bold'>Related Projects</h4>
              <ul>
                {navItems[2].children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="block  px-2 py-2 underline hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-white p-5'>
              <h4 className='!text-xl font-bold'>Related Servives</h4>
              <ul>
                {navItems[1].children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="block  px-2 py-2 underline hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


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