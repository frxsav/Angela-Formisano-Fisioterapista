import Image from 'next/image';
// import Link from 'next/link';
import { specializzazioni, studi } from '@/lib/data';

export default function About() {
  return (
    <section className="flex flex-col font-title">
      <div className="min-h-[60vh] w-full bg-[url('/images/trattamento-riabilitazione-posturale.webp')] bg-no-repeat bg-cover bg-center fixed top-0 left-0 z-10">
        <div className="absolute top-0 w-full h-full bg-primary-900/50"></div>
        <h4 className="absolute bottom-0 lg:left-[10%] left-0 text-6xl text-shadow-ctext text-shadow-sm text-ctext-light font-semibold pb-2">
          Chi Sono
        </h4>
      </div>
      <div className="px-[10%] w-full self-center bg-secondary-light relative z-20 mt-[60vh] py-16">
        <div className="flex flex-row gap-32 bg-primary-900/5 py-16 rounded-4xl">
          <Image
            src="/images/fisioterapista.png"
            alt="Angela Formisano | Fisioterapista"
            width={600}
            height={600}
            className="rounded-4xl"
          />
          <div className="flex flex-col gap-3 items-start max-w-[60%] pr-32">
            <h3 className="text-6xl font-bold text-primary-900 text-shadow-ctext text-shadow-xs">
              Angela Formisano
            </h3>
            <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
            <h4 className="text-2xl text-primary-300 font-semibold pb-4">
              Fisioterapista Iscritta all'Ordine interprovinciale della
              Professione Sanitaria di Fisioterapista di Napoli, Avellino,
              Benevento e Caserta n.3850
            </h4>
            <ul className="flex flex-col list-disc pl-6 text-ctext/90 text-2xl font-text">
              {studi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h6 className="text-primary-900 text-xl font-semibold underline pt-4">
              Aree di specializzazione:
            </h6>
            <ul className="flex flex-col list-disc pl-6 text-ctext/90 text-2xl font-text">
              {specializzazioni.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
