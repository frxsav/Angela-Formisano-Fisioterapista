import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-primary-900 flex flex-row justify-center">
      <div className="w-[80%] flex items-center justify-center">
        <div className="flex flex-col gap-6 w-[50%]">
          <h1 className="text-xs text-start md:w-[50%] text-ctext-light uppercase text-shadow-lg">
            Angela Formisano - Fisioterapista specializzata in rieducazione
            posturale e linfodrenaggio
          </h1>
          <h2 className="md:text-7xl text-4xl font-bold text-start text-ctext-light text-shadow-lg">
            Fisioterapista Specializzata in{' '}
            <span className="text-primary-100 font-text italic">
              Linfodrenaggio
            </span>{' '}
            e{' '}
            <span className="text-primary-100 font-text italic">
              Rieducazione Posturale
            </span>
          </h2>
          <Link
            className="md:w-[30%] w-[70%] text-center font-bold mt-4 bg-cta-100 hover:bg-cta-900 transition-colors duration-300 text-ctext-light text-lg p-4 rounded-3xl shadow-lg"
            href="#appointment">
            Ritrova il tuo benessere
          </Link>
        </div>
        <Image
          className="self-end"
          src="/images/fisioterapista.png"
          alt="Rieducazione Posturale"
          width={700}
          height={475}
        />
      </div>

      {/* <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        {' '}
        About Us
      </h1> */}
    </div>
  );
}
