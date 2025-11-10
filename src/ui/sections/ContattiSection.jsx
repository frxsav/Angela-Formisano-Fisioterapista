'use client';

import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link';

export default function ContattiSection() {
  return (
    <section className="min-h-[40vh] flex justify-center p-32 relative bg-[url('/images/trattamento-riabilitazione-posturale.webp')] bg-no-repeat bg-cover bg-center">
      <div className="bg-primary-900/50 min-h-full min-w-full absolute top-0 z-10"></div>
      <Parallax
        speed={5}
        className="z-20 flex flex-col gap-5 items-center justify-center px-16 py-8 bg-secondary-light/70 backdrop-blur-sm rounded-3xl w-[50%] shadow-xl">
        <h3 className="text-4xl text-primary-900 text-shadow-primary-900 text-shadow-xs text-center font-bold">
          Hai bisogno di un percorso fisioterapico su misura ad Ercolano?
        </h3>
        <p className="text-primary-900/90 text-xl font-text leading-text text-center">
          Contattami per una valutazione e scopri come possiamo aiutarti a stare
          meglio, con trattamenti mirati e un approccio personalizzato.
        </p>
        <Link
          className="flex md:w-[30%] tracking-cta text-xl justify-center bg-cta-100 hover:bg-cta-900 transition-colors duration-300 text-ctext-light p-3 rounded-full shadow-lg flex-row items-end gap-2"
          href="/contatti">
          Contattami
        </Link>
      </Parallax>
    </section>
  );
}
