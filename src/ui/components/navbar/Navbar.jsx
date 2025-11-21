'use client';

import { useState, useEffect } from 'react';
import { BurgerMenu, DesktopMenuLinks, MobileMenuLinks, Logo } from '..';
import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setHasScrolled(window.scrollY > 0 ? true : false);
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-40 bg-secondary-light/70 backdrop-blur-sm flex justify-between items-center h-16 rounded-full w-[80%] fixed top-0 left-1/2 -translate-x-1/2 py-10 px-6 mt-8 shadow-lg">
      {/* Logo */}
      <Logo />
      {/* Desktop Menu */}
      <DesktopMenuLinks />
      <Link
        className="hidden lg:flex group tracking-cta text-xl font-semibold bg-cta-100 hover:bg-secondary-light transition-colors duration-300 text-primary-900 p-3 rounded-3xl shadow-lg flex-row items-center gap-2"
        href="#appointment">
        Prenota Ora <HiPhone className="text-xl group-hover:animate-shake" />
      </Link>
      {/* Mobile Menu Button */}
      <div className="flex items-center space-x-4 lg:hidden">
        {/* Mobile menu button */}
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenuLinks setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
}
