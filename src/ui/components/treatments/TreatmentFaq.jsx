'use client';

import { AccordionItem } from '..';
import { useState } from 'react';

export default function Faq(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (index) => {
    return isOpen === index ? setIsOpen(true) : setIsOpen(index);
  };
  return (
    <div className="flex flex-col gap-6 relative pt-16 lg:pb-16 pb-0 px-[10%]">
      <div className="text-ctext">
        <div className="flex flex-col gap-3">
          {props.faq.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-r from-primary-100/5 to-primary-100/10 border-1 border-primary-100/50 pt-5 pl-5 rounded-3xl shadow-xs">
              <AccordionItem
                isOpen={index === isOpen}
                question={item.question}
                answer={item.answer}
                toggle={() => toggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
