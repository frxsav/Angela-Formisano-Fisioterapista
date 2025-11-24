'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowUturnRight } from 'react-icons/hi2';
import { Parallax } from 'react-scroll-parallax';

export default function AboutSection() {
  return (
    <section className="bg-secondary-light pt-48 pb-16">
      <div className="lg:grid lg:grid-cols-12 flex flex-col w-[80%] m-auto">
        <div className="flex flex-col lg:col-span-6 md:pt-32 pt-16 pb-32 relative gap-6 lg:items-start items-center">
          <div className="flex flex-col lg:items-start items-center">
            <h5 className='uppercase text-primary-300 font-semibold font-title pb-3'>Chi Sono</h5>
            <h3 className="text-5xl font-bold tracking-title font-title lg:text-start text-center text-primary-900">
              Formazione ed Esperienza
            </h3>
            <div className="border-t-5 border-primary-300 h-[1px] w-20"></div>
          </div>
          <p className="text-xl text-ctext/90 font-text leading-text lg:w-[75%] w-[90%] lg:text-start text-center">
            Mi sono laureata nel 2018 in <strong>Fisioterapia</strong> alla
            Federico II di Napoli, conseguendo successivamente{' '}
            <strong>Master in Posturologia</strong> e in qualcos'altro.
            <br />
            <br />
            Da allora non ho mai smesso di informarmi e formarmi seguendo corsi
            di formazione per tecnologie innovative e metodi all'avanguardia
            specializzandomi in <strong>Linfodrenaggio</strong> e{' '}
            <strong>Rieducazione Posturale.</strong>
          </p>
          <Link
            className="flex w-fit text-xl justify-center bg-white hover:bg-secondary-light border-1 border-primary-900 transition-colors duration-300 text-primary-900 p-3 rounded-full shadow-lg flex-row items-end gap-2"
            href="/chi-sono">
            Il mio percorso completo
            <HiOutlineArrowUturnRight className="text-xl scale-y-[-1]" />
          </Link>
        </div>
        <div className="flex flex-row gap-6 lg:col-span-6 lg:pb-0 pb-16">
          <Parallax className="flex flex-col" speed={10}>
            <Image
              src="/images/fisio1.webp"
              alt="Fisio 1"
              width={400}
              height={600}
              className="rounded-[100px]"
            />
          </Parallax>
          <Parallax className="flex flex-col" speed={-10}>
            <Image
              src="/images/fisio2.webp"
              alt="Fisio 2"
              width={400}
              height={600}
              className="rounded-[100px]"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
