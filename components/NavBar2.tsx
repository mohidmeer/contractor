'use client';

import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { useSiteContent } from '@/lib/siteContent';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { BsClock, BsFillTelephoneFill } from 'react-icons/bs';
import { MdClose, MdMenu } from 'react-icons/md';
import { trackCallClick } from '@/lib/analytics';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';

function isGroupedNavChildren(children?: NavItem[]) {
  return Boolean(
    children?.some(
      (child) => child.hasChildrens && (child.children?.length ?? 0) > 0
    )
  );
}

function preferredGroup(groups: NavItem[], activeGroup: string | null) {
  if (!groups.length) return null;
  const current = groups.find((group) => group.label === activeGroup);
  if (current) return current;
  return groups.reduce((best, group) =>
    (group.children?.length ?? 0) > (best.children?.length ?? 0) ? group : best
  );
}

function GroupedDropdown({
  item,
  open,
  activeGroup,
  onActivateGroup,
  onEnter,
  onLeave,
  phoneHref,
  phoneText,
}: {
  item: NavItem;
  open: boolean;
  activeGroup: string | null;
  onActivateGroup: (label: string) => void;
  onEnter: () => void;
  onLeave: () => void;
  phoneHref: string;
  phoneText: string;
}) {
  const groups = item.children ?? [];
  const selected = preferredGroup(groups, activeGroup);
  const links = selected?.children ?? [];
  const showRail = groups.length > 1;

  return (
    <div
      className={cn(
        'absolute left-0 right-0 top-full z-30 transition-all duration-200',
        open
          ? 'visible opacity-100'
          : 'invisible pointer-events-none opacity-0'
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="h-3 -mt-3" aria-hidden />
      <div className="border-t-[3px] border-secondary bg-[#f3f6f8] text-primary shadow-[0_28px_60px_-24px_rgba(15,23,42,0.45)]">
        <div className="xl:container mx-auto px-4 py-5 sm:px-6">
          <div
            className={cn(
              'grid items-start gap-4',
              showRail && 'lg:grid-cols-[300px_minmax(0,1fr)]'
            )}
          >
            {showRail && (
              <aside className="flex flex-col self-stretch rounded-2xl bg-primary p-3 text-white">
                <p className="px-3 pb-2 pt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  {item.label}
                </p>
                <ul className="max-h-[min(48vh,420px)] space-y-1 overflow-y-auto [scrollbar-width:thin]">
                  {groups.map((group) => {
                    const count = group.children?.length ?? 0;
                    const active = selected?.label === group.label;
                    return (
                      <li key={`${group.label}-${group.href}`}>
                        <button
                          type="button"
                          onMouseEnter={() => onActivateGroup(group.label)}
                          onFocus={() => onActivateGroup(group.label)}
                          className={cn(
                            'flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-[15px] leading-snug transition-colors',
                            active
                              ? 'bg-white font-semibold text-primary'
                              : 'font-medium text-white/75 hover:bg-white/10 hover:text-white'
                          )}
                        >
                          <span>{group.label}</span>
                          <span
                            className={cn(
                              'shrink-0 text-[13px] font-semibold tabular-nums',
                              active ? 'text-secondary' : 'text-white/40'
                            )}
                          >
                            {count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href={item.href}
                  className="mt-auto rounded-xl px-3 pb-2.5 pt-3 text-sm font-semibold text-secondary transition-colors hover:bg-white/10 hover:text-white"
                >
                  View all {item.label.toLowerCase()}
                </Link>
              </aside>
            )}

            <div className="rounded-2xl bg-white px-4 py-4 shadow-sm sm:px-6 sm:py-5">
              <div className="mb-3 flex items-end justify-between gap-4 border-b border-black/8 pb-3">
                <div className="min-w-0">
                  <p className="text-xl font-semibold tracking-tight text-primary">
                    {selected?.label ?? item.label}
                  </p>
                  <p className="mt-1 text-sm text-primary/50">
                    {links.length} {links.length === 1 ? 'service' : 'services'}
                  </p>
                </div>
                {!showRail && (
                  <Link
                    href={item.href}
                    className="shrink-0 text-sm font-semibold text-secondary hover:underline"
                  >
                    View all {item.label.toLowerCase()}
                  </Link>
                )}
              </div>

              <ul
                className={cn(
                  'grid max-h-[min(48vh,420px)] gap-x-4 overflow-y-auto [scrollbar-width:thin]',
                  links.length > 4 ? 'sm:grid-cols-2' : 'grid-cols-1'
                )}
              >
                {links.map((child) => (
                  <li key={child.href} className="min-w-0">
                    <Link
                      href={child.href}
                      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-base font-medium leading-snug text-primary/80 transition-colors hover:bg-secondary/10 hover:text-primary"
                    >
                      <span>{child.label}</span>
                      <span className="text-sm text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
            <p className="text-sm text-primary/55">
              Not sure which service you need? Call and we’ll point you to the right one.
            </p>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
              onClick={trackCallClick('Navbar2 Mega Menu Call')}
            >
              <BsFillTelephoneFill size={13} />
              {phoneText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlatDropdown({
  item,
  open,
  onEnter,
  onLeave,
}: {
  item: NavItem;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const links = item.children ?? [];

  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-30 w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-all duration-200',
        open
          ? 'visible opacity-100'
          : 'invisible pointer-events-none opacity-0'
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white text-primary shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)]">
        <div className="flex items-center justify-between gap-4 border-b border-black/8 px-5 py-3.5">
          <p className="text-base font-semibold">{item.label}</p>
          <Link
            href={item.href}
            className="text-sm font-semibold text-secondary hover:underline"
          >
            View all
          </Link>
        </div>
        <ul
          className={cn(
            'max-h-[min(60vh,420px)] overflow-y-auto p-2 [scrollbar-width:thin]',
            links.length > 5 ? 'grid sm:grid-cols-2' : 'grid grid-cols-1'
          )}
        >
          {links.map((child) => (
            <li key={child.href} className="min-w-0">
              <Link
                href={child.href}
                className="block rounded-xl px-3.5 py-3 text-[15px] font-medium leading-snug text-primary/80 transition-colors hover:bg-secondary/10 hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const NavBar2 = ({ items }: { items: NavItem[] }) => {
  const { contactInfo, licenses } = useSiteContent();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHome = pathname === '/';
  const isSolid = scrolled;

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (activeMenu !== label) {
      const item = items.find((entry) => entry.label === label);
      if (item && isGroupedNavChildren(item.children)) {
        setActiveGroup(preferredGroup(item.children ?? [], null)?.label ?? null);
      }
    }
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
    setActiveGroup(null);
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
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isSolid
            ? 'bg-primary shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]'
            : 'bg-primary/80 backdrop-blur-md'
        )}
      >
        {isHome && (
          <div
            className={cn(
              'hidden overflow-hidden border-white/10 transition-all duration-500 md:block',
              isSolid ? 'max-h-0 border-b-0 opacity-0' : 'max-h-12 border-b opacity-100'
            )}
          >
            <div className="xl:container mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-xs text-white/80">
              {licenses.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="font-medium text-white/60">Licensed</span>
                  {licenses.map((license, index) => (
                    <React.Fragment key={license.number}>
                      <span className="font-semibold tracking-wide text-white">
                        {license.number}
                      </span>
                      {license.label && (
                        <span className="text-white/55">{license.label}</span>
                      )}
                      {index < licenses.length - 1 && (
                        <span className="text-white/30">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-1.5">
                <BsClock size={12} className="text-secondary" />
                <span>{contactInfo.workingHours}</span>
              </div>
            </div>
          </div>
        )}

        <nav className="xl:container mx-auto flex w-full items-stretch justify-between gap-4 px-3 sm:px-4">
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center py-2 [&_img]:!h-[58px] [&_img]:!w-auto [&_img]:!max-w-[170px] xl:[&_img]:!h-[64px]"
          >
            <Logo />
          </Link>

          <div className="hidden items-stretch lg:flex">
            <ul className="flex h-full items-stretch gap-0.5 xl:gap-1">
              {items.map((item) => {
                const grouped = isGroupedNavChildren(item.children);
                const menuOpenDesktop = activeMenu === item.label;
                const current =
                  pathname === item.href || menuOpenDesktop;

                return (
                  <li
                    key={item.label}
                    className={cn(
                      'flex items-center',
                      item.hasChildrens && grouped ? 'static' : 'relative'
                    )}
                    onMouseEnter={() => item.hasChildrens && openMenu(item.label)}
                    onMouseLeave={() => item.hasChildrens && scheduleCloseMenu()}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={item.hasChildrens ? menuOpenDesktop : undefined}
                      aria-haspopup={item.hasChildrens ? 'true' : undefined}
                      className={cn(
                        'flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors xl:px-3.5 xl:text-[15px]',
                        current
                          ? 'text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      )}
                    >
                      <span
                        className={cn(
                          'relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-secondary after:transition-opacity',
                          current ? 'after:opacity-100' : 'after:opacity-0'
                        )}
                      >
                        {item.label}
                      </span>
                      {item.hasChildrens && (
                        <FaAngleDown
                          className={cn(
                            'text-[11px] opacity-80 transition-transform duration-300',
                            menuOpenDesktop && 'rotate-180'
                          )}
                        />
                      )}
                    </Link>

                    {item.hasChildrens && grouped && (
                      <GroupedDropdown
                        item={item}
                        open={menuOpenDesktop}
                        activeGroup={activeGroup}
                        onActivateGroup={setActiveGroup}
                        onEnter={() => openMenu(item.label)}
                        onLeave={scheduleCloseMenu}
                        phoneHref={contactInfo.phone.href}
                        phoneText={contactInfo.phone.text}
                      />
                    )}

                    {item.hasChildrens && !grouped && (
                      <FlatDropdown
                        item={item}
                        open={menuOpenDesktop}
                        onEnter={() => openMenu(item.label)}
                        onLeave={scheduleCloseMenu}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contactInfo.phone.href}
              className="hidden items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 sm:inline-flex"
              onClick={trackCallClick('Navbar2 Call Button')}
            >
              <BsFillTelephoneFill size={14} />
              {contactInfo.phone.text}
            </a>

            <button
              className="relative z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <MdMenu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden transition-all duration-500',
          menuOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        )}
      >
        <button
          className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={cn(
            'absolute top-0 right-0 flex h-full w-[min(100%,380px)] flex-col bg-primary text-white shadow-2xl transition-transform duration-500 ease-out',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <span className="text-lg font-semibold tracking-wide">Menu</span>
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <MdClose size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.label}>
                  {item.hasChildrens ? (
                    <>
                      <button
                        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-white/10"
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                      >
                        <span className={pathname === item.href ? 'text-secondary' : ''}>
                          {item.label}
                        </span>
                        <FaAngleDown
                          className={cn(
                            'text-sm transition-transform duration-300',
                            openDropdown === item.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-300',
                          openDropdown === item.label
                            ? 'max-h-[70vh] overflow-y-auto opacity-100'
                            : 'max-h-0 opacity-0'
                        )}
                      >
                        {isGroupedNavChildren(item.children) ? (
                          <div className="space-y-4 px-2 py-2">
                            {item.children?.map((group) => (
                              <div key={`${group.label}-${group.href}`}>
                                <div className="mb-1 flex items-baseline justify-between gap-3 px-2">
                                  <p className="text-[15px] font-semibold leading-snug text-white">
                                    {group.label}
                                  </p>
                                  <span className="text-xs font-medium text-white/40">
                                    {group.children?.length ?? 0}
                                  </span>
                                </div>
                                <ul className="border-l border-white/15">
                                  {group.children?.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        className="block px-4 py-2.5 text-[15px] font-medium leading-snug text-white/75 transition-colors hover:text-white"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <Link
                              href={item.href}
                              className="block px-2 text-sm font-semibold text-secondary"
                              onClick={() => setMenuOpen(false)}
                            >
                              View all {item.label.toLowerCase()}
                            </Link>
                          </div>
                        ) : (
                          <ul className="py-1">
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block rounded-lg px-4 py-2.5 text-[15px] font-medium leading-snug text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-white/10',
                        pathname === item.href &&
                          'border-l-4 border-secondary bg-white/10 text-secondary'
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 border-t border-white/10 p-4">
            <div className="flex items-center gap-2 px-1 text-sm text-white/70">
              <BsClock size={14} className="shrink-0 text-secondary" />
              <span>{contactInfo.workingHours}</span>
            </div>
            <a
              href={contactInfo.phone.href}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white"
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
