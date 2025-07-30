import { contactInfo } from '@/data/constants'
import React from 'react'
import Title from './inputs/Title'

const GoogleMap = () => {
  return (
    <section className='my-12 flex items-center flex-col'>
      <Title text='Our Location' />
      <h2 className="text-heading mb-12 text-center">
        Plan your visit today
      </h2>
      <iframe
        src={contactInfo.mapEmbedUrl}
        width="100%"
        height="700"
        loading="lazy">
      </iframe>
    </section>
  )
}

export default GoogleMap
