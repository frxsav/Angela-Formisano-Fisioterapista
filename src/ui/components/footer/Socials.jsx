import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex flex-row space-x-6 py-4">
      <Link
        href="https://facebook.com"
        className="text-3xl text-primary-300 hover:text-primary-500 transition-colors duration-200">
        <FaFacebook></FaFacebook>
      </Link>
      <Link
        href="https://instagram.com"
        className="text-3xl text-primary-300 hover:text-primary-500 transition-colors duration-200">
        <FaInstagram></FaInstagram>
      </Link>
    </div>
  );
}
