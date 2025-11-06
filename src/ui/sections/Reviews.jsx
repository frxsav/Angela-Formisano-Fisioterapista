import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../components/carousel/CarouselArrowButtons';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      autore: 'Letizia Pirrottina',
      recensione:
        'Grande professionista, una grande veramente molto brava praticamente una grande si una grande.',
    },
    {
      id: 2,
      autore: 'Giovanni Cognome',
      recensione:
        'Grande professionista, molto brava praticamente una grande si una grande.',
    },
    {
      id: 3,
      autore: 'Tiziana Porcaro',
      recensione:
        'Grande professionista, una grande veramente molto brava praticamente una grande si una grande giuroooo una grande cazzo.',
    },
    {
      id: 4,
      autore: 'Tiziana Porcaro 2',
      recensione:
        'Grande professionista, una grande veramente molto brava praticamente una grande si una grande giuroooo una grande cazzo.',
    },
    {
      id: 5,
      autore: 'Tiziana Porcaro 3',
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
      <div className="flex items-center justify-end">
        <h5 className="text-4xl text-shadow-ctext text-shadow-xs">
          Cosa dicono i miei pazienti dei miei trattamenti
        </h5>
      </div>
      <div className="embla">
        <div className="max-w-[50vw] overflow-hidden" ref={emblaRef}>
          <div className="gap-3 embla__container p-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="embla__slide flex flex-col gap-3 items-center bg-primary-500/10 p-6 flex-none basis-1/3 rounded-2xl">
                <div className="embla__slide__number">
                  <h3 className="text-2xl font-semibold">{review.autore}</h3>
                  <p className="text-ctext/80 text-center text-lg leading-text">
                    {review.recensione}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
