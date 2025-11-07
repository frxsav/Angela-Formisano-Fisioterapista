'use client';

import { AccordionItem } from '../components';
import { useState } from 'react';

export default function Faq() {
  const accordionItems = [
    {
      question: 'A cosa serve la FIsioterapia?',
      answer:
        'La fisitoerapia serve a farti stare bene se non stai bene se hai dolori li toglie e bla bla bla.',
    },
    {
      question: 'A cosa serve la FIsioterapia?',
      answer:
        'La fisitoerapia serve a farti stare bene se non stai bene se hai dolori li toglie e bla bla bla.',
    },
    {
      question: 'A cosa serve la FIsioterapia?',
      answer:
        'La fisitoerapia serve a farti stare bene se non stai bene se hai dolori li toglie e bla bla bla.',
    },
    {
      question: 'A cosa serve la FIsioterapia?',
      answer:
        'La fisitoerapia serve a farti stare bene se non stai bene se hai dolori li toglie e bla bla bla.',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (index) => {
    return isOpen === index ? setIsOpen(true) : setIsOpen(index);
  };
  return (
    <section className="bg-secondary-light text-ctext flex justify-center py-16">
      <div className="w-[80%] flex flex-row">
        <div className="flex flex-col bg-white/75 shadow-sm rounded-xl p-4 gap-12">
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
