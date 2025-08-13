'use client';
import { contactInfo, socialLinks } from '@/data';
import React from 'react';
import { BsClock } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
const TopBar = () => {
  return (
    <div className="bg-secondary p-4 flex flex-wrap items-center justify-center text-sm sm:text-base text-white gap-6 font-semibold whitespace-nowrap ">
      <div className="hidden sm:flex items-center gap-2 ml-auto">
        <span className="font-semibold">License #:</span>
        <span className="font-bold">CCC1234567</span>
        <span className=" text-gray-300">(Roofing)</span>,
        <span className="font-bold">CGC7654321</span>
        <span className=" text-gray-300">(General Contractor)</span>
      </div>

      <div className="flex items-center gap-2">
        <BsClock size={20} />
        {contactInfo.workingHours}
      </div>

      <div className="hidden lg:flex items-center gap-3 p-2 ml-auto ">
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-all"
        >
          <FaFacebookSquare size={24} />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-all"
        >
          <FaInstagramSquare size={24} />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 transition-all"
        >
          <FaTwitterSquare size={24} />
        </a>
      </div>

    </div>
  );
};

export default TopBar;