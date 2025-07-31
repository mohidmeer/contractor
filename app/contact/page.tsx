import AreaOfServices from '@/components/AreaOfServices'
import GoogleMap from '@/components/GoogleMap'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataContact } from '@/data/jsonld'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col gap-10 '>
      <Header cta desc='' title={'Contact Us'} />
      <section>
        dsad
      </section>
      <AreaOfServices/>
      <GoogleMap/>
      <JsonLd data={JsonLdDataContact} />
    </main>
  )
}

export default page
