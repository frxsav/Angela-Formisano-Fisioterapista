import Link from 'next/link';
import { DropdownMenu } from '.';

export default function DesktopMenuLinks(props) {
  return (
    <div
      className={`${
        props.fromFooter
          ? 'lg:col-span-3 col-span-12'
          : 'hidden lg:block'
      }`}>
      <div
        className={`flex flex-${props.flexDirection} lg:gap-4 text-ctext lg:items-start items-center lg:pb-0`}>
        <p
          className={`font-bold pb-3 text-2xl ${
            props.fromFooter ? 'block text-secondary-light' : 'hidden'
          }`}>
          Navigazione
        </p>
        <Link
          href="/"
          className={`lg:py-2 py-1 rounded-md font-medium transition-colors  ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-secondary-light'
              : 'hover:text-primary-300 px-3'
          }`}>
          Home
        </Link>
        <Link
          href="/chi-sono"
          className={`lg:py-2 py-1 rounded-md font-medium transition-colors  ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-secondary-light'
              : 'hover:text-primary-300 px-3'
          }`}>
          Chi Sono
        </Link>
        {!props.fromFooter && <DropdownMenu />}
        <Link
          href="/contatti"
          className={`lg:py-2 py-1 rounded-md font-medium transition-colors  ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-secondary-light'
              : 'hover:text-primary-300 px-3'
          }`}>
          Contatti
        </Link>
      </div>
    </div>
  );
}
