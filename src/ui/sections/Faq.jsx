'use client';

import { AccordionItem } from '../components';
import { useState } from 'react';
import { accordionItems } from '@/lib/data';

export default function Faq() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (index) => {
    return isOpen === index ? setIsOpen(true) : setIsOpen(index);
  };
  return (
    <section className="bg-secondary-light text-ctext flex justify-center py-16">
      <div className="lg:w-[80%] flex flex-row border-t-1 border-secondary/10 pt-16 justify-center">
        <div className="flex flex-col bg-white/75 shadow-sm rounded-xl px-4 py-6 gap-12 w-[80%]">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              isOpen={index === isOpen}
              question={item.question}
              answer={item.answer}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
