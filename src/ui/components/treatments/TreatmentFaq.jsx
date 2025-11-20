'use client';

import { AccordionItem } from '..';
import { useState } from 'react';

export default function Faq(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (index) => {
    return isOpen === index ? setIsOpen(true) : setIsOpen(index);
  };
  return (
    <div className="flex flex-col gap-6 relative lg:pt-48 pt-32 lg:pb-16 pb-0">
      <div className="px-[10%] text-ctext">
        <div className="flex flex-col gap-3">
          {props.faq.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-r from-primary-300/5 to-primary-300/10 pt-5 pl-5 rounded-3xl shadow-xs">
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
