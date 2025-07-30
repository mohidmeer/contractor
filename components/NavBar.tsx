'use client';
import React from 'react'
import Logo from './Logo'
import { contactInfo, navItems } from '@/data/constants'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import { BsFillTelephoneFill } from 'react-icons/bs';


const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className=' bg-primary w-full z-20'>
      <div className='container mx-auto w-full flex justify-between items-center '>
        <Logo />
        <div className="items-center  hidden md:flex" id="navbar-cta">
          <ul className="flex flex-row p-4 md:p-0 mt-4 md:space-x-8 font-bold">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={
                    `flex items-center gap-2 py-2 px-3 md:p-0 text-white    md:hover:text-white `
                  }
                >
                  <span className={`${pathname == item.href && 'border-white border-b-2 '}`}> {item.label}</span>
                  {item.hasChildrens && <span><FaAngleDown /></span>}
                </Link>
                {item.hasChildrens && (
                  <ul className="absolute hidden group-hover:block bg-white text-black shadow-md  p-2 rounded whitespace-nowrap z-20">
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 hover:bg-secondary hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a href={contactInfo.phone.href} className='flex gap-2 btn-secondary'>
          <BsFillTelephoneFill size={20} className='' />
          {contactInfo.phone.text}
        </a>
      </div>
    </nav>
  )
}
export default NavBar
