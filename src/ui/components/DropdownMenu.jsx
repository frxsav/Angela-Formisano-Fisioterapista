'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import { trattamenti } from '@/lib/data';

export default function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="treatments-dropdown"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative py-2 rounded-md font-medium transition-colors text-ctext">
        <button
          className={`flex flex-row items-center gap-1 hover:text-primary-300
            ${isOpen ? 'text-primary-300' : ''}`}>
          Trattamenti <HiChevronDown />
        </button>
        {isOpen && (
          <div className="absolute z-50 pt-5 left-0 top-10">
            <div className="flex flex-col text-center rounded-b-3xl bg-secondary-light/95 border-t">
              {trattamenti.map((item) => (
                <Link
                  key={item}
                  className="py-2 border-b border-primary-900/20 last:border-0 hover:text-primary-300"
                  href={'#' + item}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
