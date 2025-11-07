import useEmblaCarousel from 'embla-carousel-react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../components/carousel/CarouselArrowButtons';
import Link from 'next/link';
import { HiPhone, HiStar } from 'react-icons/hi';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      autore: 'Letizia',
      recensione:
        'Grande professionista, una grande veramente molto brava praticamente una grande si una grande.',
    },
    {
      id: 2,
      autore: 'Giovanni',
      recensione:
        'Grande professionista, molto brava praticamente una grande si una grande.',
    },
    {
      id: 3,
      autore: 'Tiziana',
      recensione:
        'Grande professionista, una grande veramente molto brava praticamente una grande si una grande giuroooo una grande cazzo.',
    },
    {
      id: 4,
      autore: 'Giulia',
      recensione:
        'Grande professionista, una grande veramente molto brava praticamente una grande si una grande giuroooo una grande cazzo. giuroooo una giuroooo una grande cazzo grande cazzo',
    },
    {
      id: 5,
      autore: 'Marco',
      recensione:
        'Grande professionista, una grande veramente molto brava praticamente una grande si una grande giuroooo una grande cazzo.',
    },
  ];
  const options = { dragFree: true, loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="bg-secondary-light flex py-16 px-[10%] text-ctext">
      <div className="flex flex-col items-start w-[50%] pr-16 gap-16">
        <div className="flex flex-col gap-6">
          <h5 className="text-5xl text-shadow-ctext text-shadow-xs">
            Cosa dicono i miei pazienti dei miei trattamenti
          </h5>
          <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
        </div>

        <div className="flex flex-row gap-3">
          <Link
            className="tracking-cta text-xl justify-center bg-cta-100 hover:bg-cta-900 transition-colors border-1 border-cta-100 hover:border-cta-900 duration-300 text-ctext-light p-4 rounded-full shadow-lg flex-row items-end gap-2"
            href="/contact">
            Prenota una visita
          </Link>
          <Link
            className="group flex flex-row items-center tracking-cta text-xl justify-center bg-secondary-light border-1 border-cta-100 hover:bg-cta-900 transition-colors duration-300 text-cta-100 hover:text-secondary-light hover:border-cta-900 p-4 rounded-full shadow-lg gap-2"
            href="/contact">
            +39 3394211017
            <HiPhone className="text-xl group-hover:animate-shake" />
          </Link>
        </div>
      </div>
      <div className="embla">
        <div className="max-w-[50vw] overflow-hidden" ref={emblaRef}>
          <div className="gap-3 embla__container px-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="embla__slide flex flex-col bg-radial from-secondary-light to-cta-100/10 p-6 flex-none basis-1/3 rounded-2xl border-1 border-cta-100 shadow-secondary/50 shadow-xs">
                <div className="embla__slide__number h-[300px] gap-2">
                  <h3 className="text-3xl font-bold">{review.autore}</h3>
                  <div className="flex flex-col justify-start gap-6">
                    <div className="flex flex-row text-xl">
                      {Array.from({ length: 5 }, (_, index) => (
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
    </section>
  );
}
