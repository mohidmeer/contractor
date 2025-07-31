'use client';
import React, { useState } from 'react'
import Logo from './Logo'
import { contactInfo, navItems } from '@/data/constants'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdClose, MdMenu } from 'react-icons/md';


const NavBar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=' bg-primary w-full z-20 relative'>
      {/* Mobile Nav */}
      <div className={`absolute block lg:hidden inset-0 h-screen bg-black/50 z-50 ${menuOpen ? 'translate-x-0':'translate-x-full'}`}>
        <button className='text-white cursor-pointer absolute right-2 top-5' onClick={()=>{setMenuOpen(false)}}>
          <MdClose size={36}  />
        </button>
        <div className=' h-full  bg-white  w-fit px-4'>
          <ul className="flex flex-col gap-4 p-4  font-bold ">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-4 py-2 px-3 md:p-0 text-black whitespace-nowrap`}
                >
                  <span className={`border-l-4 border-transparent  pl-2 ${pathname == item.href && '!border-secondary'}`}> {item.label}</span>
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
          <a href={contactInfo.phone.href} className='btn-secondary flex items-center gap-2'>
            <BsFillTelephoneFill />
            {contactInfo.phone.text}
          </a>

        </div>
      </div>

      <div className='xl:container mx-auto w-full flex justify-between items-center px-2'>
        <Logo />
        <div className="items-center  hidden lg:flex  " id="navbar-cta">
          <ul className="flex flex-row p-4 md:p-0 mt-4  md:space-x-4 xl:space-x-8 font-semibold xl:font-bold ">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={
                    `flex items-center gap-2 py-2 px-3 md:p-0 text-white  md:hover:text-white whitespace-nowrap`
                  }
                >
                  <span className={`${pathname == item.href && 'border-white border-b-2'}`}> {item.label}</span>
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

        <div className='flex gap-2 items-center '>
          <a href={contactInfo.phone.href} className='hidden sm:flex gap-2 btn-secondary'>
            <BsFillTelephoneFill size={20} className='' />
            {contactInfo.phone.text}
          </a>
          <button className='text-white cursor-pointer lg:hidden' onClick={()=>{setMenuOpen(true)}}>
            <MdMenu size={36}  />
          </button>
        </div>

      </div>

    </nav>
  )
}
export default NavBar
