import {
  Logo,
  LegalLinks,
  Socials,
  Copyright,
  DesktopMenuLinks,
  ServicesLinks,
} from '../components';

export default function Footer() {
  return (
    <div className="bg-secondary p-4 px-12 pt-12 z-40">
      <div className="grid grid-cols-12 border-b-1 border-ctext-light">
        <div className="grid lg:justify-start items-start justify-center lg:justify-items-start justify-items-center lg:col-span-3 col-span-12 lg:pb-0 pb-6">
          <Logo />
          <p className="text-ctext-light/90 italic lg:text-start text-center w-[50%]">
            Dott.ssa Angela Formisano - Fisioterapia dermatofunzionale e
            Rieducazione posturale.
          </p>
        </div>
        {/* Navigazione */}
        <DesktopMenuLinks flexDirection="col" fromFooter={true} />
        {/* Lista Servizi */}
        <ServicesLinks />
        {/* Privacy, Cookies and Terms&Cons */}
        <LegalLinks />
        <div className="col-span-12 flex justify-center md:justify-start">
          <Socials></Socials>
        </div>
      </div>
      <Copyright></Copyright>
    </div>
  );
}
