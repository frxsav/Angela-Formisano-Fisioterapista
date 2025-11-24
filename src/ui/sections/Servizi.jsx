import {
  GiHealthNormal,
  GiStickingPlaster,
  GiBiceps,
  GiArmBandage,
} from 'react-icons/gi';
import { Carousel } from '../components';

export default function ServiziSection() {
  return (
    <section className="pt-80 bg-secondary-light lg:pb-32">
      <div className="flex flex-col items-center w-[80%] m-auto self-center">
        <h3 className="font-text lg:text-5xl text-4xl font-black tracking-tight text-shadow-sm lg:text-start text-center pb-1 text-primary-900">
          Come posso aiutarti
        </h3>
        <div className="border-t-5 border-primary-300 h-[1px] w-20"></div>
        <h3 className="lg:text-3xl text-2xl lg:text-start text-center font-text text-ctext/90 pt-3">
          Trattamenti fisioterapici su misura per ogni esigenza del paziente
        </h3>
        <ul className="flex lg:flex-row flex-col pt-12 gap-18 text-xl font-text items-center justify-center pb-16">
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiArmBandage className="text-primary-300 text-4xl" />
            <span className='text-center'>Ritrovare il benessere</span>
          </li>
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiStickingPlaster className="text-primary-300 text-4xl" />
            <span className='text-center'>Recuperare da un infortunio</span>
          </li>
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiBiceps className="text-primary-300 text-4xl" />
            <span className='text-center'>Prevenire problemi muscoloscheletrici</span>
          </li>
          <li className="flex lg:flex-row flex-col items-center gap-2">
            <GiHealthNormal className="text-primary-300 text-4xl" />
            <span className='text-center'>migliorare la tua qualità di vita</span>
          </li>
        </ul>
        <Carousel />
      </div>
    </section>
  );
}
