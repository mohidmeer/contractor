import Header from '@/components/Header'
import React from 'react'
import FAQs from '@/components/Faqs'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataAbout } from '@/jsonld'
import { aboutPage } from '@/data'
import AreaOfServices from '@/components/AreaOfServices'
import GetToKnow from '@/app/_components/GetToKnow'
import Process from '@/app/_components/Process'

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
