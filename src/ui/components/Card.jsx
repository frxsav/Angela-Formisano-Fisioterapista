import Link from 'next/link';
import Image from 'next/image';

export default function Card({ servizio, id }) {
  return (
    <div className="transition duration-300 ease-in-out flex flex-col flex-none items-center justify-start rounded-3xl shadow-xl overflow-hidden w-[500px] bg-secondary-light gap-6">
      <Image
        src="/images/rieducazione-posturale.webp"
        alt="Servizio 1"
        width={500}
        height={500}
      />
      <div className="flex flex-col flex-1 items-center w-[80%] gap-6 mb-6">
        <p className="font-title font-bold text-2xl text-shadow-sm text-center">
          {servizio.title} {servizio.id}
          {id}
        </p>
        <span className="text-center text-xl font-text">{servizio.dsc}</span>
      </div>
      <div className="flex justify-end mb-6">
        <Link
          className="bg-cta-100 hover:bg-cta-900 transition-colors duration-500 text-ctext-light p-3 rounded-full shadow-lg mt-auto"
          href="#appointment">
          Scopri di più
        </Link>
      </div>
    </div>
  );
}
