import Image from 'next/image';
import { HiClock } from 'react-icons/hi';

export default function TreatmentBody(props) {
  const titleArray = [];
  const subtitleArray = [];
  const dscArray = [];

  props.therapy.title.split('<br/>').forEach((element) => {
    titleArray.push(element);
  });
  props.therapy.subtitle.split('<br/>').forEach((element) => {
    subtitleArray.push(element);
  });
  props.therapy.dsc.split('<br/>').forEach((element) => {
    dscArray.push(element);
  });
  return (
    <div className="grid grid-cols-12 px-[10%] pb-32 items-start">
      <div className="flex flex-col lg:gap-8 gap-6 md:col-span-6 col-span-12">
        <div className="flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-primary-100/20 border border-primary-100/20 text-primary-900 text-sm tracking-wide font-semibold">
          <span className="w-2 h-2 rounded-full bg-primary-100"></span>
          <span>Angela Formisano | Fisioterapista specializzata</span>
        </div>
        <div className="flex flex-col gap-3 lg:items-start items-center">
          {titleArray.map((item, index) => (
            <h1
              key={index}
              className="lg:text-5xl text-4xl lg:text-start text-center font-title font-bold text-primary-900 text-shadow-xs">
              {item}
            </h1>
          ))}
          <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
        </div>
        {subtitleArray.map((item, index) => (
          <h2
            key={index}
            className="lg:text-3xl text-2xl font-bold lg:text-start text-center font-title text-ctext text-shadow-xs">
            {item}
          </h2>
        ))}
        {dscArray.map((item, index) => (
          <p
            key={index}
            className="font-text text-ctext md:text-2xl text-xl md:pt-0 pt-8">
            {item}
          </p>
        ))}
      </div>
      <div className="relative lg:col-span-4 col-span-12 lg:col-end-13">
        <Image
          src={props.therapy.img}
          alt="Laserterapia"
          width={500}
          height={500}
          className="rounded-[5rem] bg-primary-300/25"
        />
        <div className="absolute md:bottom-8 md:-left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-xs animate-bounce-slow hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary-100/20 rounded-full text-primary-100">
              <HiClock size={20} />
            </div>
            <span className="font-bold text-primary-900">Recupero Rapido</span>
          </div>
          <p className="text-sm text-ctext/75">
            Protocolli personalizzati per ridurre i tempi di guarigione fino al
            50%.
          </p>
        </div>
      </div>
    </div>
  );
}
