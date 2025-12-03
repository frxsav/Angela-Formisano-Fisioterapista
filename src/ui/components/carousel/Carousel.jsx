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
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {servizi.map((servizio, index) => (
            <div
              className="cursor-pointer embla__slide flex-none lg:basis-1/3 md:basis-1/2 basis-full group overflow-hidden"
              key={index}>
              <div
                className="embla__slide__number px-8 md:px-12 rounded-xl pt-18 pb-4 bg-hero-pattern min-h-[19rem] relative overflow-hidden"
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/70 to-transparent group-hover:from-primary-500/90 group-hover:via-primary-500/70 transition-colors duration-300 z-30"></div>
                <div className='flex flex-col md:gap-3 gap-2'>
                  <p className="font-roboto font-bold text-2xl text-center text-ctext-light z-40 shrink-0">
                    {servizio.title}
                  </p>
                  <span className="text-center text-lg font-display tracking-wide text-ctext-light/95 z-40">
                    {servizio.dsc}
                  </span>
                </div>
                <Link
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 uppercase font-semibold flex items-center font-roboto justify-center self-center text-lg bg-transparent transition-colors duration-500 text-cta-100 group-hover:text-ctext-light p-3 rounded-full text-center z-40"
                  href="#appointment">
                  Scopri di più
                  <HiChevronRight className="text-2xl" />
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
