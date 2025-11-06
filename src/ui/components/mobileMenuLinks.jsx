import Link from 'next/link';

export default function MobileMenuLinks(props) {
  return (
    <div className="md:hidden flex justify-center bg-secondary-light/70 backdrop-blur-sm absolute top-[80px] w-[80%] left-[10%] rounded-b-3xl duration-300">
      <div className="flex flex-col pt-2 pb-3 gap-3">
        <Link
          href="/"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => props.setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          href="/about"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => props.setIsMenuOpen(false)}>
          About
        </Link>
        <Link
          href="/services"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => props.setIsMenuOpen(false)}>
          Services
        </Link>
        <Link
          href="/contact"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => propssetIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </div>
  );
}
