'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="mb-1">
      <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-semibold tracking-wide">
        <li>
          <Link
            href="/"
            className="text-white/75 hover:text-white transition-colors"
          >
            Home
          </Link>
        </li>
        {paths.map((segment, index) => {
          const href = '/' + paths.slice(0, index + 1).join('/');
          const isLast = index === paths.length - 1;
          const label = segment.replace(/-/g, ' ');

          return (
            <li key={href} className="flex items-center gap-2">
              <span
                className="inline-block size-1.5 rounded-full bg-secondary shrink-0"
                aria-hidden
              />
              {isLast ? (
                <span className="text-white capitalize">{label}</span>
              ) : (
                <Link
                  href={href}
                  className="text-white/75 hover:text-white capitalize transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
