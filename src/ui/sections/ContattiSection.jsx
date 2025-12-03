'use client';

import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link';

export default function ContattiSection(props) {
  return (
    <section className="min-h-[40vh] flex justify-center md:p-32 p-8 relative bg-[url('/images/trattamento-riabilitazione-posturale.webp')] bg-no-repeat bg-cover bg-center z-20">
      <div className="bg-primary-900/75 min-h-full min-w-full absolute top-0 z-30"></div>
      <Parallax
        speed={5}
        className="z-40 flex flex-col gap-5 items-center justify-center md:px-16 px-8 py-8 bg-secondary-light/70 backdrop-blur-sm rounded-3xl lg:w-[50%] w-[90%] shadow-xl">
        <h3 className="md:text-4xl text-2xl text-primary-900 text-shadow-2xs text-center font-bold tracking-tight">
          {props.title
            ? props.title
            : 'Hai bisogno di un percorso riabilitativo su misura ad Ercolano?'}
        </h3>
        <p className="text-ctext/90 md:text-xl text-lg font-display leading-text text-center">
          {props.dsc
            ? props.dsc
            : 'Contattami per una valutazione e scopri come posso aiutarti a stare meglio, con trattamenti mirati e un approccio personalizzato.'}
        </p>
        <Link
          className="flex w-fit md:text-xl text-lg font-semibold justify-center bg-cta-100 hover:bg-cta-100/75 transition-colors duration-300 text-primary-900 py-3 px-6 rounded-full shadow-lg flex-row items-end gap-2"
          href="/contatti">
          {props.cta ? props.cta : 'Contattami'}
        </Link>
      </Parallax>
    </section>
  );
}
