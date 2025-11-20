'use client';

import Link from 'next/link';
import { IoMdRibbon, IoMdPulse, IoMdFitness, IoMdHeart } from 'react-icons/io';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="bg-[url('/images/trattamento-riabilitazione-posturale.webp')] bg-no-repeat bg-cover bg-center">
      <div className="font-title min-h-[90vh] px-[10%] items-center justify-center flex lg:flex-row flex-col bg-primary-900/75 lg:pt-32 lg:gap-0 gap-6">
        <div className="flex flex-col gap-3 lg:w-[70%] items-center lg:items-start lg:order-first order-last">
          <h1 className="lg:text-lg text-md font-bold lg:text-start text-center text-ctext-light lg:tracking-wide tracking-normal uppercase text-shadow-sm font-text w-[75%]">
            <span className="underline underline-offset-3 decoration-cta-100 decoration-2">Angela Formisano</span> - Fisioterapista
            specializzata in rieducazione posturale e linfodrenaggio
          </h1>
          <h2 className="lg:text-7xl text-5xl font-bold lg:w-[85%] lg:text-start text-center text-ctext-light text-shadow-lg lg:tracking-normal tracking-title">
            Il tuo punto di riferimento per la riabilitazione ad{' '}
            <span className="text-primary-100">Ercolano</span>
          </h2>
          <div className="flex lg:flex-row flex-col gap-6">
            <Link
              className="tracking-cta lg:self-start self-center text-center mt-4 border-1 border-cta-100 bg-cta-100 hover:bg-cta-900 hover:border-cta-900 duration-300 text-ctext-light text-lg p-4 rounded-full shadow-lg"
              href="#appointment">
              Prenota un appuntamento
            </Link>
            <Link
              className="tracking-cta lg:self-start self-center text-center mt-4 border-1 border-cta-100 bg-secondary-light hover:bg-secondary-light-hover duration-300 text-cta-100 text-lg p-4 rounded-full shadow-lg"
              href="#appointment">
              Scopri i trattamenti
            </Link>
          </div>
        </div>
        <div className="bg-primary-100/25 rounded-full overflow-hidden border-2 border-primary-100 shadow-lg lg:mt-0 mt-42">
          <div className="w-[100px] h-[100px] bg-primary-100/75 absolute top-[200px] right-[650px] rounded-full lg:block hidden"></div>
          <div className="w-[200px] h-[200px] bg-primary-100/50 absolute top-[600px] right-[700px] rounded-full lg:block hidden"></div>
          <Image
            src="/images/fisioterapista.png"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="bg-primary-900/75 flex flex-col">
        <Parallax className="flex flex-col" speed={-5}>
          <div
            className="z-20 lg:w-[80%] w-[90%] bg-secondary-light flex lg:flex-row flex-col self-center relative top-30 rounded-xl lg:py-12 px-6 shadow-2xl"
            id="div-container-list">
            <div className="flex flex-col lg:gap-6 gap-2 text-center lg:border-r-1 lg:border-b-0 border-b-1 border-secondary-100 lg:px-6 lg:py-0 py-6 min-w-[25%]">
              <IoMdRibbon className="text-6xl self-center text-primary-300" />
              <h3 className="text-xl font-bold text-ctext">
                Esperienza e Formazione
              </h3>
              <p className="font-text text-lg leading-text text-ctext/75">
                Anni di esperienza e continuo impegno nella formazione
                professionale per offrire il miglior servizio possibile
              </p>
            </div>
            <div className="flex flex-col lg:gap-6 gap-2 text-center lg:border-r-1 lg:border-b-0 border-b-1 border-secondary-100 lg:px-6 lg:py-0 py-6 min-w-[25%]">
              <IoMdHeart className="text-6xl self-center text-primary-300" />
              <h3 className="text-xl font-bold text-ctext">
                Trattamenti Personalizzati
              </h3>
              <p className="font-text text-lg leading-text text-ctext/75">
                Percorsi terapeutici su misura per ogni paziente
              </p>
            </div>
            <div className="flex flex-col lg:gap-6 gap-2 text-center lg:border-r-1 lg:border-b-0 border-b-1 border-secondary-100 lg:px-6 lg:py-0 py-6 min-w-[25%]">
              <IoMdFitness className="text-6xl self-center text-primary-300" />
              <h3 className="text-xl font-bold text-ctext">
                Strumentazione moderne
              </h3>
              <p className="font-text text-lg leading-text text-ctext/75">
                Utilizzo tecnologie ed attrezzature all'avanguardia per
                garantire la miglior qualità ed efficacia dei trattamenti
              </p>
            </div>
            <div className="flex flex-col lg:gap-6 gap-2 text-center min-w-[25%] lg:px-6 lg:py-0 py-6">
              <IoMdPulse className="text-6xl self-center text-primary-300" />
              <h3 className="text-xl font-bold text-ctext">
                Professionalità e Dedizione
              </h3>
              <p className="font-text text-lg leading-text text-ctext/75">
                Garantisco la massima professionalità e dedizione alla
                risoluzione del problema in ogni fase del trattamento
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
