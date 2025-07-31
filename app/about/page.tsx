import Header from '@/components/Header'
import React from 'react'
import GetToKnow from '../_components/GetToKnow'
import FAQs from '@/components/Faqs'
import Process from '../_components/Process'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataAbout } from '@/data/jsonld'
import { pages } from '@/data/constants'

const page = () => {
  return (
    <main className='flex flex-col gap-10 '>
      <Header cta desc={pages.about.seo.description} title={pages.about.seo.title} />
      <GetToKnow />
      <Process />
      <FAQs />
      <JsonLd data={JsonLdDataAbout} />
    </main>
  )
}

export default page
