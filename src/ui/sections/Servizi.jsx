import {
  GiHealthNormal,
  GiStickingPlaster,
  GiBiceps,
  GiArmBandage,
} from 'react-icons/gi';
import { Carousel } from '../components';

export default function ServiziSection() {
  return (
    <section className="pt-80 bg-secondary-light text-ctext">
      <div className="flex flex-col items-center w-[80%] m-auto self-center pb-32">
        <h2 className="font-text lg:text-5xl text-4xl font-black tracking-tight uppercase text-shadow-sm lg:text-start text-center pb-1">
          I miei servizi di Fisioterapia ad Ercolano
        </h2>
        <div className="border-t-5 border-primary-300 h-[1px] w-[10%]"></div>
        <h3 className="lg:text-3xl text-2xl lg:text-start text-center font-text text-ctext/80 pt-3">
          Trattamenti fisioterapici su misura per ogni esigenza del paziente
        </h3>
        <ul className="flex lg:flex-row flex-col pt-12 gap-18 text-xl font-text items-center justify-center">
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiArmBandage className="text-primary-300 text-4xl" />
            <span>Ritrovare il benessere</span>
          </li>
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiStickingPlaster className="text-primary-300 text-4xl" />
            <span>Recuperare da un infortunio</span>
          </li>
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiBiceps className="text-primary-300 text-4xl" />
            <span>Prevenire problemi muscoloscheletrici</span>
          </li>
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiHealthNormal className="text-primary-300 text-4xl" />
            <span>migliorare la tua qualità di vita</span>
          </li>
        </ul>
        <Carousel />
      </div>
      <svg viewBox="0 0 1000 100" className="absolute">
        <path
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          fill="oklch(94.611% 0.00011 271.152)"
        />
      </svg>
    </section>
  );
}
