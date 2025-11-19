import Link from 'next/link';
import { trattamenti } from '@/lib/data';

export default function ServicesLinks() {
  return (
    <div className="flex flex-col text-ctext dark:text-ctext lg:col-span-3 col-span-12 lg:items-start items-center lg:pt-0 pt-12">
      <p className="text-ctext-light font-bold pb-2 text-2xl">Servizi</p>
      {trattamenti.map((item, index) => (
        <Link
          key={index}
          href={'/' + item.replaceAll(' ', '-').toLowerCase()}
          className="text-secondary-light hover:underline underline-offset-4 py-1 rounded-md font-medium">
          {item}
        </Link>
      ))}
    </div>
  );
}
