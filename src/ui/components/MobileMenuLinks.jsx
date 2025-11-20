import Link from 'next/link';

export default function MobileMenuLinks(props) {
  return (
    <div className="lg:hidden flex justify-center bg-secondary-light/90 backdrop-blur-sm absolute top-[80px] w-[80%] left-[10%] rounded-b-3xl duration-300 border-b-1 border-r-1 border-l-1 border-secondary/30">
      <div className="flex flex-col pt-2 pb-3 gap-3 w-full">
        <Link
          href="/"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 font-medium transition-colors border-b-1 border-secondary/10 w-[80%] self-center text-center"
          onClick={() => props.setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          href="/chi-sono"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 font-medium transition-colors border-b-1 border-secondary/10 w-[80%] self-center text-center"
          onClick={() => props.setIsMenuOpen(false)}>
          About
        </Link>
        <Link
          href="/servizi"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 font-medium transition-colors border-b-1 border-secondary/10 w-[80%] self-center text-center"
          onClick={() => props.setIsMenuOpen(false)}>
          Services
        </Link>
        <Link
          href="/contatti"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors text-center"
          onClick={() => propssetIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </div>
  );
}
