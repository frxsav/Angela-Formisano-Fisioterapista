'use client';

import React from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { servizi } from '@/lib/data';

const Carousel = (props) => {

  const options = { dragFree: true, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla py-16">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {servizi.map((servizio, index) => (
            <div
              className="embla__slide flex-none lg:basis-1/3 md:basis-1/2 basis-full"
              key={index}>
              <div
                className="embla__slide__number px-12 lg:rounded-xl pt-18 pb-12 bg-hero-pattern min-h-[19rem] justify-items-center"
                style={{
                  background: `linear-gradient(oklch(0.2966 0.0901 252.5 / 0.25), oklch(0.2966 0.0901 252.5 / 0.75)), url(${servizio.img}) center center / cover no-repeat`,
                }}>
                <p className="font-title font-bold text-2xl text-shadow-sm text-center text-ctext-light">
                  {servizio.title} {servizio.id}
                </p>
                <span className="text-center text-xl font-text text-ctext-light">
                  {servizio.dsc}
                </span>
                <Link
                  className="lg:w-[50%] self-center text-lg tracking-cta bg-cta-100 hover:bg-secondary-light transition-colors duration-500 text-primary-900 p-3 rounded-full shadow-lg text-center"
                  href="#appointment">
                  Scopri di più
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex justify-center">
        <div className="embla__buttons pt-3 gap-3">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
