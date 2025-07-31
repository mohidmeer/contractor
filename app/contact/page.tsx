import AreaOfServices from '@/components/AreaOfServices'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import { JsonLdDataContact } from '@/data/jsonld'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import React from 'react'
import { contactInfo } from '@/data/constants'
import FAQs from '@/components/Faqs'
import Process from '../_components/Process'

const page = () => {
  return (
    <main className='flex flex-col gap-10 '>
      <Header cta desc='' title={'Contact Us'} />
      <section className='container mx-auto'>
        <div className='grid sm:grid-cols-2 gap-5'>

          <div className="w-full h-full flex flex-col items-center justify-center ">
            <div className="flex flex-col gap-6 w-full bg-white ">
              {/* Phone */}
              <div className=" card rounded-sm h-fit p-4 flex items-start gap-4 ">
                <FaPhoneAlt className="text-primary mt-1" size={22} />
                <div>
                  <p className="p1 font-medium">Phone</p>
                  <a href={contactInfo.phone.href} className="text-base ">
                    {contactInfo.phone.text}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className=" card rounded-sm h-fit p-4 flex items-start gap-4 ">
                <FaEnvelope className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <p className="p1 font-medium">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="p2 ">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className=" card rounded-sm  p-4 flex items-start gap-4 ">
                <FaMapMarkerAlt className="text-primary mt-1" size={22} />
                <div>
                  <p className="p1 font-medium">Address</p>
                  <p className="p2">{contactInfo.address}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className=" card rounded-sm  p-4 flex items-start gap-4 ">
                <FaClock className="text-primary mt-1" size={22} />
                <div>
                  <p className="p1 font-medium">Working Hours</p>
                  <p className="p2">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=''>



            <ContactForm />




          </div>
        </div>
      </section>
      <FAQs/>
      <Process/>
      <AreaOfServices />
      <JsonLd data={JsonLdDataContact} />
    </main>
  )
}

export default page
