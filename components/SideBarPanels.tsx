'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';

function groupForPath(groups: NavItem[], pathname: string) {
  return groups.find((group) =>
    group.children?.some((child) => child.href === pathname)
  )?.label;
}

function SideLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={cn(
        'block rounded-lg px-3 py-2.5 text-[15px] font-medium leading-snug transition-colors',
        active
          ? 'border-l-2 border-secondary bg-secondary/10 text-primary'
          : 'text-primary/75 hover:bg-secondary/10 hover:text-primary'
      )}
    >
      {item.label}
    </Link>
  );
}

function ServicesCard({ groups }: { groups: NavItem[] }) {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(
    () => groupForPath(groups, pathname) ?? groups[0]?.label ?? null
  );

  useEffect(() => {
    const match = groupForPath(groups, pathname);
    if (match) setOpenGroup(match);
  }, [groups, pathname]);

  return (
    <section className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm">
      <div className="border-b border-black/8 px-4 py-3.5">
        <p className="text-base font-semibold text-primary">Our Services</p>
      </div>
      <ul>
        {groups.map((group) => {
          const open = openGroup === group.label;
          const count = group.children?.length ?? 0;
          return (
            <li key={`${group.label}-${group.href}`} className="border-b border-black/6">
              <button
                type="button"
                aria-expanded={open}
                onClick={() =>
                  setOpenGroup((current) =>
                    current === group.label ? null : group.label
                  )
                }
                className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-[15px] font-semibold leading-snug text-primary transition-colors hover:bg-primary/[0.03]"
              >
                <span>{group.label}</span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="text-xs font-medium tabular-nums text-primary/40">
                    {count}
                  </span>
                  <FaAngleDown
                    className={cn(
                      'text-xs text-primary/50 transition-transform duration-200',
                      open && 'rotate-180'
                    )}
                  />
                </span>
              </button>
              {open && (
                <ul className="space-y-0.5 px-2 pb-3">
                  {group.children?.map((child) => (
                    <li key={child.href}>
                      <SideLink item={child} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Link
        href="/services"
        className="block px-4 py-3 text-sm font-semibold text-secondary hover:underline"
      >
        View all services
      </Link>
    </section>
  );
}

function ProjectsCard({ projects }: { projects: NavItem[] }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm">
      <div className="border-b border-black/8 px-4 py-3.5">
        <p className="text-base font-semibold text-primary">Our Projects</p>
      </div>
      <ul className="max-h-80 space-y-0.5 overflow-y-auto px-2 py-2 [scrollbar-width:thin]">
        {projects.map((project) => (
          <li key={project.href}>
            <SideLink item={project} />
          </li>
        ))}
      </ul>
      <Link
        href="/projects"
        className="block border-t border-black/8 px-4 py-3 text-sm font-semibold text-secondary hover:underline"
      >
        View all projects
      </Link>
    </section>
  );
}

export default function SideBarPanels({
  serviceGroups,
  projects,
}: {
  serviceGroups: NavItem[];
  projects: NavItem[];
}) {
  return (
    <>
      {serviceGroups.length > 0 && <ServicesCard groups={serviceGroups} />}
      {projects.length > 0 && <ProjectsCard projects={projects} />}
    </>
  );
}
