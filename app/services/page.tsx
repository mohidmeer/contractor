import Header from '@/components/Header'
import { servicesData } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import Process from '../_components/Process'
import Projects from '../_components/Projects'
import {  pages } from '@/data/constants'
import JsonLd from '@/components/JsonLd'
import FAQs from '@/components/Faqs'
import AreaOfServices from '@/components/AreaOfServices'
import GoogleMap from '@/components/GoogleMap'
import { JsonLdDataServices } from '@/data/jsonld'

const page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Header cta={true} desc={pages.services.seo.description} title={pages.services.seo.title} />
      <section className="p-2 mx-auto">
        <div className="flex flex-col  my-10 container mx-auto gap-10">
          {Object.entries(servicesData).map(([slug, i], z) => (
            <div className="text-heading cursor-pointer" key={slug}>
              <div className="h-full  group sm:p-10 grid md:grid-cols-2 gap-4  overflow-hidden  bg-white shadow-md border border-primary/20 rounded-md">
                <div className={`flex flex-col gap-4  justify-center p-4 ${z % 2 !== 0 ? 'order-2 ' : 'order-1'}`}>
                  <p className="text-xl font-bold text-primary">{z + 1}.</p>
                  <div className=" flex flex-col gap-4">
                    <h3 className="!text-2xl font-semibold">{i.title}</h3>
                    <p className="text-lg">{i.description}</p>
                    <p className="text-lg overflow-hidden transition-all line-clamp-4 ">{i.content}</p>
                    <Link
                      href={`/services/${slug}`}
                      className="text-xl flex items-center gap-2 font-bold group btn-primary w-fit"
                    >
                      <p className="font-bold">Continue Reading</p>
                      <MdArrowForward className="group-hover:translate-x-6 transition-all" />
                    </Link>
                  </div>

                </div>
                <div className={`relative overflow-hidden md:h-[500px] rounded-md ${z % 2 !== 0 ? 'order-1' : 'order-2'}`}>
                  <Image
                    src={i.image}
                    fill
                    className=" group-hover:scale-110 transition-all"
                    style={{ objectFit: "cover" }}
                    alt="service"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Projects />
      <Process />
      <FAQs />
      <AreaOfServices/>
      <JsonLd data={JsonLdDataServices} />
    </main>
  )
}

export default page
