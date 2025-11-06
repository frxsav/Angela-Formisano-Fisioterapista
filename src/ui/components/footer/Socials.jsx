import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex flex-row space-x-6 py-4">
      <Link href="https://facebook.com" className="text-3xl text-cta-100 hover:text-cta-900 transition-colors duration-200">
        <FaFacebook></FaFacebook>
      </Link>
      <Link href="https://instagram.com" className="text-3xl text-cta-100 hover:text-cta-900 transition-colors duration-200">
        <FaInstagram></FaInstagram>
      </Link>
      <Link href="https://tiktok.com" className="text-3xl text-cta-100 hover:text-cta-900 transition-colors duration-200">
        <FaTiktok></FaTiktok>
      </Link>
    </div>
  );
}
