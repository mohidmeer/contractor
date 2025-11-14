import AreaOfServices from '@/components/AreaOfServices'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataContact } from '@/jsonld'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import React from 'react'
import { contactInfo } from '@/data'
import FAQs from '@/components/Faqs'
import Process from '@/app/_components/Process'

const page = () => {
  return (
    <main className='flex flex-col gap-10 '>
      <Header cta desc='' title={'Contact Us'} />
      <section className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Contact Information Cards */}
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-primary/10 hover:border-primary/30 p-6 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaPhoneAlt size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-heading mb-2">Phone</p>
                  <a href={contactInfo.phone.href} className="text-base text-gray-700 hover:text-primary transition-colors">
                    {contactInfo.phone.text}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-primary/10 hover:border-primary/30 p-6 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaEnvelope size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-heading mb-2">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-base text-gray-700 hover:text-primary transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-primary/10 hover:border-primary/30 p-6 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-heading mb-2">Address</p>
                  <p className="text-base text-gray-700 leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-primary/10 hover:border-primary/30 p-6 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaClock size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-heading mb-2">Working Hours</p>
                  <p className="text-base text-gray-700">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='w-full'>
            <ContactForm />
          </div>
        </div>
      </section>
      <FAQs />
      <Process />
      <AreaOfServices />
      <JsonLd data={JsonLdDataContact} />
    </main>
  )
}

export default page
