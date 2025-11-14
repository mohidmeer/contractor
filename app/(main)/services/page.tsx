import Header from '@/components/Header'
import { servicesData, servicesPage } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import JsonLd from '@/components/JsonLd'
import FAQs from '@/components/Faqs'
import AreaOfServices from '@/components/AreaOfServices'
import { JsonLdDataServices } from '@/jsonld'
import Projects from '@/app/_components/Projects'
import Process from '@/app/_components/Process'

const page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Header cta={true} desc={servicesPage.seo.description} title={servicesPage.seo.title} />
      <section className="p-2 mx-auto">
        <div className="flex flex-col  my-10 container mx-auto gap-12">
          {Object.entries(servicesData).map(([slug, i], z) => (
            <Link href={`/services/${slug}`} className="text-heading cursor-pointer group" key={slug}>
              <div className="h-full sm:p-8 grid md:grid-cols-2 gap-6 overflow-hidden bg-white shadow-lg hover:shadow-2xl border border-primary/20 hover:border-primary/40 rounded-xl transition-all duration-300 relative">
                {/* Decorative accent line */}
                <div className={`absolute top-0 ${z % 2 !== 0 ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Number badge with gradient */}
                <div className={`absolute ${z % 2 !== 0 ? 'right-8 top-8' : 'left-8 top-8'} z-10 bg-gradient-to-br from-primary to-primary/80 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {z + 1}
                </div>

                <div className={`flex flex-col gap-5 justify-center p-6 md:p-8 relative ${z % 2 !== 0 ? 'order-2 ' : 'order-1'}`}>
                  <div className="flex flex-col gap-4 mt-8 md:mt-0">
                    <h3 className="!text-3xl font-bold text-heading group-hover:text-primary transition-colors duration-300">
                      {i.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 leading-relaxed">
                      {i.description}
                    </p>
                    <p className="text-base text-gray-600 overflow-hidden transition-all line-clamp-4 leading-relaxed">
                      {i.content}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-lg mt-2 group-hover:gap-4 transition-all duration-300">
                      <span>Continue Reading</span>
                      <MdArrowForward className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <div className={`relative overflow-hidden md:h-[500px] rounded-lg ${z % 2 !== 0 ? 'order-1' : 'order-2'} group-hover:rounded-xl transition-all duration-300`}>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  <Image
                    src={i.image}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={i.title}
                  />

                  {/* Decorative corner element */}
                  <div className={`absolute ${z % 2 !== 0 ? 'top-0 left-0' : 'top-0 right-0'} w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
      <JsonLd data={JsonLdDataServices} />
    </main>
  )
}

export default page
