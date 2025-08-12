import Header from '@/components/Header'
import React from 'react'
import GetToKnow from '../_components/GetToKnow'
import FAQs from '@/components/Faqs'
import Process from '../_components/Process'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataAbout } from '@/jsonld'
import { aboutPage } from '@/data'
import AreaOfServices from '@/components/AreaOfServices'

const page = () => {
  return (
    <main className='flex flex-col gap-10 '>
      <Header cta desc={aboutPage.seo.description} title={aboutPage.seo.title} />
      <GetToKnow description={aboutPage.content} />
      {/* Socialsa lateron  */}
      <Process />
      <FAQs />
      <AreaOfServices />
      <JsonLd data={JsonLdDataAbout} />
    </main>
  )
}

export default page
