'use client';

import Image from 'next/image';
import { patologieLaserterapia, laserterapiaFaq } from '@/lib/data';
import { ContattiSection, AccordionItem } from '@/ui';
import { useState } from 'react';

export default function Laserterapia() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (index) => {
    return isOpen === index ? setIsOpen(true) : setIsOpen(index);
  };
  return (
    <section className="flex flex-col font-title">
      <div className="min-h-[60vh] w-full bg-[url('/images/trattamento-riabilitazione-posturale.webp')] bg-no-repeat bg-cover bg-center z-10 relative">
        <div className="absolute top-0 w-full h-full bg-primary-900/50"></div>
        <h4 className="absolute bottom-0 lg:left-[10%] left-0 text-6xl text-shadow-ctext text-shadow-md text-secondary-light font-semibold pb-2 italic">
          Laserterapia
        </h4>
      </div>
      <div className="bg-secondary-light py-32 flex flex-col text-ctext relative">
        <div className="flex flex-row gap-64 px-[10%]">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-title font-bold text-primary-900 text-shadow-xs">
              Laserterapia ad Ercolano: <br />
              La tecnologia che riduce il dolore e accelera il recupero
            </h1>
            <h2 className="text-3xl font-bold font-title text-ctext text-shadow-xs">
              Soffri di dolori muscolari, infiammazioni o rigidità articolare?
            </h2>
            <p className="font-text text-ctext/90 text-2xl">
              La <strong>laserterapia</strong> è un trattamento non invasivo che
              utilizza fasci di luce ad alta intensità per ridurre il dolore,
              diminuire l'infiammazione e stimolare la rigenerazione dei
              tessuti. Agendo in profondità, il laser favorisce un recupero più
              rapido e mirato, rendendolo particolarmente efficace in caso di{' '}
              <strong>disturbi muscolari, articolari o tendinei.</strong>
              <br />
              <br />
              Grazie alla sua azione analgesica e biostimolante, la laserterapia
              è indicata in numerose condizioni, dalle{' '}
              <strong>infiammazioni acute</strong> ai{' '}
              <strong>fastidi cronici.</strong> Di seguito trovi alcune delle
              situazioni in cui può essere particolarmente utile:
            </p>
            <ul className="grid grid-cols-12 gap-3 list-disc pl-6 text-ctext text-xl font-text">
              {patologieLaserterapia.map((item, index) => (
                <li className="col-span-4 pr-3" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/terapia.webp"
            alt="Laserterapia"
            width={500}
            height={500}
            className="rounded-[5rem] bg-primary-300/25"
          />
        </div>
        <div className="flex flex-col gap-6 relative pt-64 pb-16">
          <div className="px-[10%] text-ctext">
            <div className="flex flex-col gap-3">
              {laserterapiaFaq.map((item, index) => (
                <div
                  key={index}
                  className="bg-linear-to-r from-cta-100/5 to-cta-100/10 pt-5 pl-5 rounded-3xl shadow-xs">
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
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Laserterapia"
        cta="Prenota Ora"
      />
    </section>
  );
}
