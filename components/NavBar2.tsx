'use client';

import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { contactInfo, licenses, navItems } from '@/data';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { BsClock, BsFillTelephoneFill } from 'react-icons/bs';
import { MdClose, MdMenu } from 'react-icons/md';
import { trackCallClick } from '@/lib/analytics';

const NavBar2 = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHome = pathname === '/';
  const isSolid = scrolled || !isHome;

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const scheduleCloseMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? 'bg-primary/95 shadow-xl shadow-black/20 backdrop-blur-xl border-b border-white/10'
            : 'bg-black/40 backdrop-blur-md border-b border-white/10'
        }`}
      >
        {/* Top bar */}
        <div
          className={`hidden md:block transition-all duration-500 overflow-hidden ${
            isSolid ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="xl:container mx-auto px-3 py-0.5 flex items-center justify-center gap-4 lg:gap-6 flex-wrap text-[11px] lg:text-xs text-white/90">
            {licenses.length > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="font-medium text-white/70">License #</span>
                {licenses.map((license, index) => (
                  <React.Fragment key={license.number}>
                    <span className="font-bold tracking-wide">{license.number}</span>
                    {license.label && (
                      <span className="text-white/60">({license.label})</span>
                    )}
                    {index < licenses.length - 1 && <span className="text-white/40">·</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
            <div className="flex items-center gap-1.5 text-white/80">
              <BsClock size={12} className="text-secondary" />
              <span>{contactInfo.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="xl:container mx-auto w-full flex justify-between items-center px-2 sm:px-3 py-0.5">
          <Link href="/" className="relative z-10 drop-shadow-lg transition-transform hover:scale-[1.02] [&_img]:!w-[140px] sm:[&_img]:!w-[160px]">
            <Logo />
          </Link>

          <div className="items-center hidden lg:flex">
            <ul className="flex flex-row items-center gap-0.5 xl:gap-1 text-sm font-semibold">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`${item.hasChildrens ? 'static' : 'relative'}`}
                  onMouseEnter={() => item.hasChildrens && openMenu(item.label)}
                  onMouseLeave={() => item.hasChildrens && scheduleCloseMenu()}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-2 xl:px-2.5 py-1 text-white/90 hover:text-white transition-colors whitespace-nowrap"
                  >
                    <span
                      className={`relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${
                        pathname === item.href || activeMenu === item.label
                          ? 'after:w-full text-white'
                          : 'after:w-0 hover:after:w-full'
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.hasChildrens && (
                      <FaAngleDown
                        className={`text-xs opacity-80 transition-transform duration-300 ${
                          activeMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {item.hasChildrens && (
                    <div
                      className={`absolute left-0 right-0 top-full z-30 transition-all duration-200 ${
                        activeMenu === item.label
                          ? 'opacity-100 visible pointer-events-auto'
                          : 'opacity-0 invisible pointer-events-none'
                      }`}
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleCloseMenu}
                    >
                      {/* Keeps hover active while moving from the link into the panel */}
                      <div className="h-4 -mt-4" aria-hidden />
                      <div className="w-full bg-white/95 backdrop-blur-xl text-black shadow-2xl shadow-black/25 border-t border-b border-black/5">
                        <div className="xl:container mx-auto px-4 sm:px-6 py-6 lg:py-8">
                          <div className="flex items-end justify-between gap-4 mb-5 pb-4 border-b border-black/10">
                            <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-1">
                                Explore
                              </p>
                              <h3 className="text-xl font-bold text-primary">{item.label}</h3>
                            </div>
                            <Link
                              href={item.href}
                              className="text-sm font-semibold text-secondary hover:underline whitespace-nowrap"
                            >
                              View all {item.label.toLowerCase()} →
                            </Link>
                          </div>

                          <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                            {item.children?.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  className="flex items-center gap-2 h-full px-4 py-3 rounded-lg text-sm font-medium text-black/80 hover:text-white hover:bg-secondary transition-colors border border-transparent hover:border-secondary"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 pt-5 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-sm text-black/60">
                              Need help choosing? Talk with our team today.
                            </p>
                            <a
                              href={contactInfo.phone.href}
                              className="inline-flex items-center gap-2 btn-secondary"
                              onClick={trackCallClick('Navbar2 Mega Menu Call')}
                            >
                              <BsFillTelephoneFill size={14} />
                              {contactInfo.phone.text}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <a
              href={contactInfo.phone.href}
              className="hidden sm:inline-flex items-center gap-2 btn-secondary"
              onClick={trackCallClick('Navbar2 Call Button')}
            >
              <BsFillTelephoneFill size={20} />
              {contactInfo.phone.text}
            </a>

            <button
              className="lg:hidden relative z-10 flex h-9 w-9 items-center justify-center rounded-sm border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <MdMenu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer so content isn't hidden under fixed header on non-home pages */}
      {!isHome && <div className="h-[52px] md:h-[58px]" aria-hidden />}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[min(100%,340px)] bg-gradient-to-b from-primary to-[#0a1628] text-white shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <span className="font-bold tracking-wide text-lg">Menu</span>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <MdClose size={24} />
            </button>
          </div>

          <div className="px-3 py-4 overflow-y-auto h-[calc(100%-140px)]">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.hasChildrens ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between gap-3 rounded-xl px-4 py-3 font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                        onClick={() =>
                          setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                        }
                      >
                        <span className={pathname === item.href ? 'text-secondary' : ''}>
                          {item.label}
                        </span>
                        <FaAngleDown
                          className={`transition-transform duration-300 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <ul
                        className={`overflow-hidden transition-all duration-300 ${
                          openDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.children?.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-lg ml-3 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-secondary/80 transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-4 py-3 font-semibold hover:bg-white/10 transition-colors ${
                        pathname === item.href ? 'bg-white/10 text-secondary border-l-4 border-secondary' : ''
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/20 space-y-3">
            <div className="flex items-center gap-2 text-sm text-white/75 px-1">
              <BsClock size={14} className="text-secondary shrink-0" />
              <span>{contactInfo.workingHours}</span>
            </div>
            <a
              href={contactInfo.phone.href}
              className="flex items-center justify-center gap-2 btn-secondary w-full rounded-full"
              onClick={trackCallClick('Navbar2 Mobile Sidebar')}
            >
              <BsFillTelephoneFill />
              {contactInfo.phone.text}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar2;
