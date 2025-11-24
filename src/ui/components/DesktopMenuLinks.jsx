import Link from 'next/link';
import { DropdownMenu } from '.';

export default function DesktopMenuLinks(props) {
  return (
    <div
      className={`${
        props.fromFooter ? 'lg:col-span-3 col-span-12' : 'hidden lg:block'
      }`}>
      <div
        className={`flex flex-${
          props.flexDirection
        } text-ctext lg:items-start items-center lg:pb-0 ${
          props.fromFooter ? '' : 'lg:gap-4'
        }`}>
        <p
          className={`font-bold pb-2 text-2xl ${
            props.fromFooter ? 'block text-secondary-light' : 'hidden'
          }`}>
          Navigazione
        </p>
        <Link
          href="/"
          className={`rounded-md font-medium transition-colors  ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-secondary-light/90 py-1'
              : 'hover:text-primary-300 px-3 lg:py-2'
          }`}>
          Home
        </Link>
        <Link
          href="/chi-sono"
          className={`rounded-md font-medium transition-colors  ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-secondary-light/90 py-1'
              : 'hover:text-primary-300 px-3 lg:py-2'
          }`}>
          Chi Sono
        </Link>
        {!props.fromFooter && <DropdownMenu />}
        <Link
          href="/contatti"
          className={`rounded-md font-medium transition-colors  ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-secondary-light/90 py-1'
              : 'hover:text-primary-300 px-3 lg:py-2'
          }`}>
          Contatti
        </Link>
      </div>
    </div>
  );
}
