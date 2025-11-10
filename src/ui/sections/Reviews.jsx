'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { HiPhone, HiStar } from 'react-icons/hi';
import { reviews } from '@/lib/data';

export default function Reviews() {
  const options = { dragFree: true, loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="bg-secondary-light flex md:flex-row flex-col py-16 px-[10%] text-ctext">
      <div className="flex flex-col items-start lg:w-[50%] md:w-[60%] w-full md:pr-16 pr-0 md:gap-16 gap-8 md:pb-0 pb-8">
        <div className="flex flex-col gap-6 md:items-start items-center">
          <h5 className="text-5xl text-shadow-ctext text-shadow-xs md:text-start text-center">
            Cosa dicono i miei pazienti dei miei trattamenti
          </h5>
          <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
        </div>

        <div className="hidden md:flex lg:flex-row flex-col gap-3 w-full md:items-start items-center md:pb-0 pb-16">
          <Link
            className="tracking-cta text-lg justify-center bg-cta-100 hover:bg-cta-900 transition-colors border-1 border-cta-100 hover:border-cta-900 duration-300 text-ctext-light p-4 rounded-full shadow-lg flex-row items-end gap-2"
            href="/contatti">
            Prenota una visita
          </Link>
          <Link
            className="group flex flex-row items-center tracking-cta text-lg justify-center bg-secondary-light border-1 border-cta-100 hover:bg-secondary-light-hover transition-colors duration-300 text-cta-100 p-4 rounded-full shadow-lg gap-2"
            href="/contatti">
            +39 3394211017
            <HiPhone className="text-xl group-hover:animate-shake" />
          </Link>
        </div>
      </div>
      <div className="embla lg:w-full md:w-[40%] w-full">
        <div
          className="md:max-w-[50vw] max-w-[100vw] overflow-hidden"
          ref={emblaRef}>
          <div className="gap-3 embla__container pl-4 md:pr-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="embla__slide flex flex-col bg-radial from-secondary-light to-cta-100/10 p-6 flex-none lg:basis-1/3 basis-full rounded-2xl border-1 border-cta-100 shadow-secondary/50 shadow-xs">
                <div className="embla__slide__number h-[300px] gap-2">
                  <h3 className="text-3xl font-bold">{review.autore}</h3>
                  <div className="flex flex-col justify-start gap-6">
                    <div className="flex flex-row text-xl">
                      {Array.from({ length: review.stelle }, (_, index) => (
                        <HiStar key={index} className="text-primary-300" />
                      ))}
                    </div>
                    <p className="text-ctext/80 text-xl leading-text font-text italic">
                      {review.recensione}
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
          className="tracking-cta text-xl justify-center bg-cta-100 hover:bg-cta-900 transition-colors border-1 border-cta-100 hover:border-cta-900 duration-300 text-ctext-light p-4 rounded-full shadow-lg flex-row items-end gap-2"
          href="/contatti">
          Prenota una visita
        </Link>
        <Link
          className="group flex flex-row items-center tracking-cta text-xl justify-center bg-secondary-light border-1 border-cta-100 hover:bg-secondary-light-hover transition-colors duration-300 text-cta-100 p-4 rounded-full shadow-lg gap-2"
          href="/contatti">
          +39 3394211017
          <HiPhone className="text-xl group-hover:animate-shake" />
        </Link>
      </div>
    </section>
  );
}
