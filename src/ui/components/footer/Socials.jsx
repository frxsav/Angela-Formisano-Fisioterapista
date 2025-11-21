import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex flex-row space-x-6 py-4 md:justify-start justify-center">
      <Link
        href="https://facebook.com"
        className="text-3xl text-cta-100 hover:text-cta-900 transition-colors duration-200"
        aria-label='Facebook'>
        <FaFacebook></FaFacebook>
      </Link>
      <Link
        href="https://instagram.com"
        className="text-3xl text-cta-100 hover:text-cta-900 transition-colors duration-200"
        aria-label='Instagram'>
        <FaInstagram></FaInstagram>
      </Link>
    </div>
  );
}
