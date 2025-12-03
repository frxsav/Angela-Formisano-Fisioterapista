'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { HiPhone, HiStar } from 'react-icons/hi';
import { IoMdCalendar } from 'react-icons/io';
import { reviews } from '@/lib/data';

export default function Reviews() {
  const options = { dragFree: true, loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="flex md:flex-row flex-col py-16 relative">
      <div class="absolute top-0 z-30 h-full w-full bg-primary-100 bg-[radial-gradient(#ffffff33_1px,#00244de6_1px)] bg-[size:150px_150px]"></div>
      <div className="z-40 flex flex-col items-start lg:w-[50%] md:w-[60%] w-full md:pr-16 pr-0 md:gap-16 gap-8 md:pb-0 pb-8 pl-[10%]">
        <div className="flex flex-col gap-3 md:items-start items-center">
          <h3 className="text-5xl text-shadow-xs md:text-start text-center text-ctext-light font-bold font-roboto">
            Cosa ne pensano i miei pazienti
          </h3>
          <div className="border-t-5 border-primary-300 h-[1px] w-20"></div>
        </div>

        <div className="hidden md:flex lg:flex-row flex-col gap-3 w-full md:items-start items-center md:pb-0 pb-16">
          <Link
            className="text-lg font-semibold tracking-tighter flex flex-row justify-center bg-cta-100 hover:bg-cta-100/75 transition-colors border-1 border-cta-100 duration-300 text-primary-900 p-3 rounded-full shadow-lg items-end gap-2"
            href="/contatti">
            <IoMdCalendar className="text-2xl" />
            Prenota una visita
          </Link>
          <Link
            className="group font-semibold tracking-tighter flex flex-row items-center text-lg justify-center bg-white hover:bg-white/75 transition-colors duration-300 text-primary-900 p-3 rounded-full shadow-lg gap-2"
            href="/contatti">
            +39 3394211017
            <HiPhone className="text-xl group-hover:animate-shake" />
          </Link>
        </div>
      </div>
      <div className="embla lg:w-full md:w-[40%] w-full z-40">
        <div
          className="md:max-w-[50vw] max-w-[100vw] overflow-hidden"
          ref={emblaRef}>
          <div className="gap-3 embla__container pl-4 md:pr-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="embla__slide flex flex-col bg-secondary-light/10 border-1 border-secondary-light/20 backdrop-blur-lg p-6 flex-none lg:basis-1/3 basis-full rounded-3xl">
                <div className="embla__slide__number h-[300px]">
                  <h3 className="text-3xl font-semibold text-ctext-light font-display">
                    {review.autore}
                  </h3>
                  <div className="flex flex-col justify-start gap-6">
                    <div className="flex flex-row text-xl border-b-1 border-secondary-light/20 pb-2">
                      {Array.from({ length: review.stelle }, (_, index) => (
                        <HiStar key={index} className="text-primary-100" />
                      ))}
                    </div>
                    <p className="text-ctext-light/90 text-xl leading-text font-display italic pt-4">
                      "{review.recensione}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:hidden lg:flex-row flex-col gap-3 w-full md:items-start items-center md:pb-0 pb-16 pt-8">
        <Link
          className="text-xl font-semibold justify-center bg-cta-100 hover:bg-cta-900 transition-colors border-1 border-cta-100 hover:border-cta-900 duration-300 text-primary-900 p-4 rounded-full shadow-lg flex-row items-end gap-2"
          href="/contatti">
          Prenota una visita
        </Link>
        <Link
          className="group font-semibold flex flex-row items-center text-xl justify-center bg-secondary-light border-1 border-primary-900 hover:bg-cta-100 transition-colors duration-300 text-primary-900 p-4 rounded-full shadow-lg gap-2"
          href="/contatti">
          +39 3394211017
          <HiPhone className="text-xl group-hover:animate-shake" />
        </Link>
      </div>
    </section>
  );
}
