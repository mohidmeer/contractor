import Header from '@/components/Header'
import Title from '@/components/inputs/Title'
import { servicesData } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'

const page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Header cta={true} desc='We provide top-quality residential and commercial roofing services across Florida, ensuring durability and excellence.' title={'Roofing Services In Florida'} />
      <section className=" p-2 mx-auto">
        <div className="text-center flex items-center justify-center flex-col gap-2 max-w-3xl mx-auto">
          <Title text={'Services'} />
          <h2 className='text-heading text-center'>Protect Your Property with Reliable Roofing Services</h2>

        </div>
        <div className="grid grid-cols-3 gap-1 my-10">
          {Object.entries(servicesData).map(([slug, i], z) => (
            <div className="text-white cursor-pointer" key={slug}>
              <div className="h-full relative group flex flex-col p-10  hover:bg-black/90 transition-all bg-black/70 overflow-hidden">
                <p className="text-xl font-bold">{z + 1}.</p>
                <div className=" flex flex-col gap-4">
                  <h3 className="!text-2xl font-semibold">{i.title}</h3>
                  <p className="text-lg">{i.description}</p>
                  <p className="text-lg group-hover:h-full h-0 overflow-hidden transition-all line-clamp-4">{i.content}</p>
                  <Link
                    href={`/services/${slug}`}
                    className="text-xl flex items-center gap-2 font-bold group"
                  >
                    <p className="font-bold">Read More</p>
                    <MdArrowForward className="group-hover:translate-x-6 transition-all" />
                  </Link>
                </div>
                <Image
                  src={i.image}
                  fill
                  className="-z-5 group-hover:scale-110 transition-all"
                  style={{ objectFit: "cover" }}
                  alt="service"
                />
              </div>
            </div>
          ))}
        </div>


      </section>
    </main>
  )
}

export default page
