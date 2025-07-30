import { contactInfo, socialLinks } from '@/data/constants';
import React from 'react'
import { FaLocationDot, } from "react-icons/fa6";
import { BsClock, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className='bg-secondary p-4  hidden md:flex items-center justify-center text-white gap-8 font-bold whitespace-nowrap '>
      <a href={contactInfo.phone.href} className='flex items-center gap-2 ml-auto'>
        <BsFillTelephoneFill size={20} className='text-primary' />
        {contactInfo.phone.text}
      </a>
      <a href={contactInfo.mapEmbedUrl} className='flex items-center gap-2 '>
        <FaLocationDot size={20} className='text-primary' />
        Florida - United States
      </a>
      <div className="flex items-center gap-2">
        <BsClock size={20} className="text-primary" />
        {contactInfo.workingHours}
      </div>

      <div className="flex items-center gap-3 p-2 ml-auto ">
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-all"
        >
          <FaFacebookSquare size={20} />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-all"
        >
          <FaInstagramSquare size={20} />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-all"
        >
          <FaTwitterSquare size={20} />
        </a>
      </div>
    </div>
  )
}

export default TopBar