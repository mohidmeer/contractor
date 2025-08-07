// import { contactInfo } from '@/data/constants'
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
      title='Google Maps'
        name='Google Maps'
        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.34883771467!2d-80.1446295!3d26.1201667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d900f8f1f3e0d9%3A0x1369d39a6c77350e!2s300%20SW%201st%20Ave%20suite%20155%2C%20Fort%20Lauderdale%2C%20FL%2033301%2C%20USA!5e0!3m2!1sen!2s!4v1754560984887!5m2!1sen!2s'}
        width="100%"
        height="700"
        loading="lazy">
      </iframe>
    </section>
  )
}

export default GoogleMap
