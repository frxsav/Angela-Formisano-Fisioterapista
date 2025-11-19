'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import { trattamenti } from '@/lib/data';
import { createPortal } from 'react-dom';

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
        {isOpen &&
          // createPortal fa si che il suo contenuto non risulti come figlio di nessuno,
          // così facendo ho potuto mettere backdrop-blur anche qui 
          // siccome un figlio di un div con backdrop-blur non può averlo a sua volta
          createPortal(
            <div
              id="dropdown-content"
              className="fixed z-50 pt-5 self-center left-[45%] top-23">
              <div className="flex flex-col text-center rounded-b-3xl bg-secondary-light/70 border-t backdrop-blur-sm px-3">
                {trattamenti.map((item) => (
                  <Link
                    key={item}
                    className="py-2 border-b border-primary-900/20 last:border-0 hover:text-primary-300 text-sm text-ctext"
                    href={'/' + item.replaceAll(' ', '-').toLowerCase()}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>,
            document.body
          )}
      </div>
    </>
  );
}
