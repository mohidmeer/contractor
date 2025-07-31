'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className="my-3">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline font-bold p2">
            Home
          </Link>
        </li>
        {paths.map((segment, index) => {
          const href = '/' + paths.slice(0, index + 1).join('/');
          const isLast = index === paths.length - 1;
          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-bold underline capitalize p2">{segment.replace(/-/g, ' ')}</span>
              ) : (
                <Link href={href} className="hover:underline capitalize font-bold p2 ">
                  {segment.replace(/-/g, ' ')}
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