import Link from 'next/link';
import React from 'react';

import { ModeToggle } from '@/components/ui/theme-toggle';
import { links } from '@/lib/data';

export default function header() {
  return (
    <header className="z-[999]  flex items-center justify-center py-20 sm:py-36">
      <div className="fixed left-4 top-0  hidden duration-500 animate-in slide-in-from-top sm:right-8 sm:top-6 sm:block">
        <h1 className="text-6xl font-semibold">
          <span className="text-black dark:text-white">Crux</span>
        </h1>
      </div>
      <div
        className="fixed top-0 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03]  backdrop-blur-[0.5rem] duration-500 animate-in slide-in-from-top dark:border-black/40 dark:bg-gray-950/75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
      >
        <nav className="fixed left-1/2 flex h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-5 gap-y-1 text-gray-500 sm:w-[initial] sm:flex-nowrap md:gap-5">
            {links.map(link => (
              <li className="flex h-3/4 items-center" key={link.hash}>
                <Link
                  className="flex w-full items-center justify-center p-3 transition hover:text-gray-950"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="fixed  right-4 top-0 mt-1  hidden duration-500 animate-in slide-in-from-top sm:right-8 sm:top-6 md:block">
        <ModeToggle />
      </div>
    </header>
  );
}
