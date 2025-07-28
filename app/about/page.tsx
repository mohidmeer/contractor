import Header from '@/components/Header'
import React from 'react'
import GetToKnow from '../_components/GetToKnow'
import FAQs from '@/components/Faqs'
import Process from '../_components/Process'

const page = () => {
  return (
    <main className='flex flex-col gap-10 '>
      <Header cta desc='' title={'About Us'} />
      <GetToKnow />
      <Process />
      <FAQs />
    </main>
  )
}

export default page
