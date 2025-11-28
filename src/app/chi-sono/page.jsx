import Image from 'next/image';
import { specializzazioni, studi } from '@/lib/data';
import { ContattiSection, Timeline, MiniHero } from '@/ui';

export default function About() {
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Chi Sono" />
      <div className="w-full self-center bg-secondary-light relative z-20 py-16 flex justify-center">
        <div className="flex flex-col bg-radial to-primary-900/10 from-secondary-light rounded-3xl shadow-lg gap-16 w-[90%]">
          <div className="flex lg:flex-row flex-col px-8 lg:gap-32 gap-16 py-16 rounded-4xl">
            <Image
              src="/images/fisioterapista.png"
              alt="Angela Formisano | Fisioterapista"
              width={500}
              height={500}
              className="rounded-full bg-primary-300/25"
            />
            <div className="flex flex-col gap-3 lg:items-start lg:max-w-[60%] lg:pr-32 items-center lg:px-0 px-4">
              <h3 className="md:text-6xl text-5xl font-bold text-primary-900 text-shadow-ctext text-shadow-xs lg:text-start text-center">
                Angela Formisano
              </h3>
              <div className="border-t-5 border-primary-300 h-[1px] w-20"></div>
              <h4 className="md:text-2xl text-xl text-primary-300 italic font-semibold pb-4 lg:text-start text-center">
                Fisioterapista Iscritta all'Ordine interprovinciale della
                Professione Sanitaria di Fisioterapista di Napoli, Avellino,
                Benevento e Caserta n.3850
              </h4>
              <ul className="flex flex-col list-disc pl-6 text-ctext/90 md:text-2xl text-xl font-text">
                {studi.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h6 className="text-primary-900 md:text-xl text-lg font-semibold underline pt-4">
                Aree di specializzazione:
              </h6>
              <ul className="flex flex-col list-disc pl-6 text-ctext/90 md:text-2xl text-xl font-text">
                {specializzazioni.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center w-[90%] self-center py-8 border-t-1 border-secondary/20">
            <h3 className="md:text-5xl text-3xl font-bold text-primary-900 text-shadow-ctext text-shadow-xs lg:text-start text-center">
              Percorso di studi ed approccio
            </h3>
            <div className="border-t-5 border-primary-300 h-[1px] w-20"></div>
            <Timeline></Timeline>
          </div>
        </div>
      </div>
      <ContattiSection />
    </section>
  );
}
