'use client';
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { contactInfo, FooterData, navItems, siteName, socialLinks } from '@/data';
import { BsClock, BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { trackCallClick } from '@/lib/analytics';

const Footer = () => {
  const services = navItems.find(item => item.label === 'Services')?.children || [];
  const projects = navItems.find(item => item.label === 'Projects')?.children || [];
  const aboutLinks = navItems.filter(item =>
    ['About Us', 'Contact Us', 'Blogs'].includes(item.label)
  );

  return (
    <footer className="bg-primary text-white pt-12 pb-6 ">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-2">
        <div className="flex flex-col justify-between">
          <div>
            <Logo />
            <p className="mt-4 p2 text-base">{FooterData.tagline}</p>
            <div className="mt-6 space-y-3 text-base">
              
              <a href={contactInfo.phone.href} onClick={trackCallClick('Footer')} className="flex items-center gap-2">
                <BsFillTelephoneFill size={20} className="text-white shrink-0" />
                {contactInfo.phone.text}
              </a>
              <a href={contactInfo.mapEmbedUrl} className="flex items-center gap-2">
                <FaLocationDot size={20} className="text-white shrink-0" />
                {contactInfo.address}
              </a>
              <div className="flex items-center gap-2">
                <BsClock size={20} className="text-white shrink-0" />
                {contactInfo.workingHours}
              </div>
            </div>


          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold mb-4 !text-xl">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.map(service => (
              <li key={service.href}>
                <Link href={service.href} className="hover:underline">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h2 className="font-semibold mb-4 !text-xl">Projects</h2>
          <ul className="space-y-2 text-sm">
            {projects.map(project => (
              <li key={project.href}>
                <Link href={project.href} className="hover:underline">
                  {project.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info + Socials */}
        <div>
          <h2 className="font-semibold mb-4 !text-xl">Company</h2>
          <ul className="space-y-2 text-sm">
            {aboutLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-6">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              aria-label="Facebook"
            >
              <FaFacebookSquare size={26} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              aria-label="Instagram"
            >
              <FaInstagramSquare size={26} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              aria-label="Twitter"
            >
              <FaTwitterSquare size={26} />
            </a>
          </div>
        </div>
      </div>
      <hr className='mt-10'/>
      <p className='text-center mt-4 '>
        License #: CCC1234567 (Roofing) , CGC7654321 (General Contractor) | Insured | © {new Date().getFullYear()} {siteName}
      </p>
    </footer>
  );
};

export default Footer;