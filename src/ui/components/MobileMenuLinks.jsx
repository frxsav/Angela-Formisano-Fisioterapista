'use client';

import Link from 'next/link';
import { createPortal } from 'react-dom';
import { AccordionItem } from '.';
import { useState } from 'react';

export default function MobileMenuLinks(props) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return createPortal(
    <div className="lg:hidden flex justify-center bg-secondary-light/70 backdrop-blur-sm fixed top-[110px] w-[60%] left-[20%] rounded-b-3xl duration-300 border-b-1 border-r-1 border-l-1 border-secondary/30 z-40">
      <div className="flex flex-col pt-2 pb-3 gap-3 w-full">
        <Link
          href="/"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 font-medium transition-colors border-b-1 border-secondary/10 w-[80%] self-center text-center"
          onClick={() => props.setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          href="/chi-sono"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 font-medium transition-colors border-b-1 border-secondary/10 w-[80%] self-center text-center"
          onClick={() => props.setIsMenuOpen(false)}>
          Chi Sono
        </Link>
        <AccordionItem
          isOpen={isAccordionOpen}
          menu={true}
          question="Trattamenti"
          toggle={() => toggle()}
        />
        <Link
          href="/contatti"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors text-center"
          onClick={() => propssetIsMenuOpen(false)}>
          Contatti
        </Link>
      </div>
    </div>,
    document.body
  );
}
