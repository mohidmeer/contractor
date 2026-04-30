'use client';
import { contactInfo, licenses, socialLinks } from '@/data';
import React from 'react';
import { BsClock } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
const TopBar = () => {
  return (
    <div className="bg-secondary p-4 flex flex-wrap items-center justify-center text-sm sm:text-base text-white gap-6 font-semibold whitespace-nowrap ">
      {licenses.length > 0 && (
        <div className="hidden sm:flex items-center gap-2 ml-auto">
          <span className="font-semibold">License #:</span>
          {licenses.map((license, index) => (
            <React.Fragment key={license.number}>
              <span className="font-bold">{license.number}</span>
              {license.label && <span>({license.label})</span>}
              {index < licenses.length - 1 && <span>,</span>}
            </React.Fragment>
          ))}
        </div>
      )}

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