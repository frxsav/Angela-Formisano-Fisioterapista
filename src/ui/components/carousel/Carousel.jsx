'use client';

import React from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import Image from 'next/image';
import { servizi } from '@/lib/data';
import { HiChevronRight } from 'react-icons/hi';
import { redirect } from 'next/navigation';

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
              className="cursor-pointer embla__slide flex-none lg:basis-1/3 md:basis-1/2 basis-full group overflow-hidden"
              key={index}>
              <div
                className="embla__slide__number px-12 lg:rounded-xl pt-18 pb-12 bg-hero-pattern min-h-[19rem] justify-items-center relative overflow-hidden"
                onClick={() =>
                  redirect(
                    '/' + servizio.title.replaceAll(' ', '-').toLowerCase()
                  )
                }>
                <Image
                  src={servizio.img}
                  fill
                  alt="Alt Image"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent group-hover:from-primary-500/90 transition-colors duration-300 z-30"></div>
                <p className="font-title font-bold text-2xl text-shadow-sm text-center text-ctext-light z-40">
                  {servizio.title} {servizio.id}
                </p>
                <span className="text-center text-xl font-text text-ctext-light z-40">
                  {servizio.dsc}
                </span>
                <Link
                  className="lg:w-[50%] uppercase font-semibold flex items-center justify-center gap-3 self-center text-lg bg-transparent transition-colors duration-500 text-cta-100 group-hover:text-ctext-light p-3 rounded-full text-center z-40"
                  href="#appointment">
                  Scopri di più
                  <HiChevronRight />
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
