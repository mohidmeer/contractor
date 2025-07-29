import Header from '@/components/Header'
import Title from '@/components/inputs/Title'
import { servicesData } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import Process from '../_components/Process'
import Projects from '../_components/Projects'
import { JsonLdDataServices } from '@/data/constants'
import JsonLd from '@/components/JsonLd'
import FAQs from '@/components/Faqs'

const page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Header cta={true} desc='We provide top-quality residential and commercial roofing services across Florida, ensuring durability and excellence.' title={'Roofing Services In Florida'} />
      <section className=" p-2 mx-auto">
        <div className="text-center flex items-center justify-center flex-col gap-2 max-w-3xl mx-auto">
          <Title text={'Services'} />
          <h2 className='text-heading text-center'>Protect Your Property with Reliable Roofing Services</h2>
        </div>
        <div className="flex flex-col gap-1 my-10 container mx-auto">
          {Object.entries(servicesData).map(([slug, i], z) => (
            <div className="text-heading cursor-pointer" key={slug}>
              <div className="h-full relative group  p-10 grid grid-cols-2   overflow-hidden">
                <div className={`flex flex-col gap-4 bg-white shadow-lg p-4 ${z % 2 !== 0 ? 'order2 bg-white' : 'order-1'}`}>
                  <p className="text-xl font-bold text-primary">{z + 1}.</p>
                  <div className=" flex flex-col gap-4">
                    <h3 className="!text-2xl font-semibold">{i.title}</h3>
                    <p className="text-lg">{i.description}</p>
                    <p className="text-lg overflow-hidden transition-all line-clamp-4 ">{i.content}</p>
                    <Link
                      href={`/services/${slug}`}
                      className="text-xl flex items-center gap-2 font-bold group btn-primary w-fit"
                    >
                      <p className="font-bold">Read More</p>
                      <MdArrowForward className="group-hover:translate-x-6 transition-all" />
                    </Link>
                  </div>

                </div>
                <div className={`relative overflow-hidden ${z % 2 !== 0 ? 'order-1' : 'order-2'}`}>
                  <Image
                    src={i.image}
                    fill
                    className="-z-5 group-hover:scale-110 transition-all"
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
      <FAQs/>
      <JsonLd data={JsonLdDataServices} />
    </main>
  )
}

export default page
