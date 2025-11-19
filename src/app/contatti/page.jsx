'use client';

import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { ContactForm, Map, Socials } from '@/ui';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Contact() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <section className="flex flex-col font-title">
        <div className="min-h-[60vh] w-full bg-[url('/images/trattamento-riabilitazione-posturale.webp')] bg-no-repeat bg-cover bg-center z-10 relative">
          <div className="absolute top-0 w-full h-full bg-primary-900/50"></div>
          <h4 className="absolute bottom-0 lg:left-[10%] left-0 text-6xl text-shadow-ctext text-shadow-md text-secondary-light font-semibold pb-2 italic">
            Contatti
          </h4>
        </div>
        <div className="w-full self-center bg-secondary-light relative z-20 py-16 flex justify-center text-ctext">
          <div className="flex md:flex-row flex-col bg-radial to-primary-900/5 from-secondary-light shadow-lg gap-16 w-[80%] p-8 rounded-3xl">
            <div className="flex flex-col gap-12 md:w-[50%] w-full">
              <div>
                <h3 className="text-4xl font-semibold font-title text-ctext">
                  Richiedi un appuntamento
                </h3>
                <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
                <p className="text-2xl font-text pt-4 w-[90%]">
                  Compila il modulo per descrivere il tuo problema. Ti
                  ricontatterò al più presto per fissare una visita.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex gap-3 md:text-2xl text-xl font-text text-ctext/90 items-center">
                  <HiPhone className="text-primary-300 text-2xl" />
                  +39 3394211017
                </p>
                <p className="flex gap-3 md:text-2xl text-xl font-text text-ctext/90 items-center">
                  <HiMail className="text-primary-300 text-2xl" />
                  angelaformisano@gmail.com
                </p>
                <p className="flex gap-3 md:text-2xl text-xl font-text text-ctext/90 items-center">
                  <HiLocationMarker className="text-primary-300 text-2xl" />
                  Via Nicolò Marcello Venuti 69
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-title font-bold underline">
                  Orari:
                </h3>
                <ul className="list-disc pl-6 marker:text-primary-300">
                  <li className="text-xl text-ctext/90 font-text">
                    Dal Lunedì al Venerdì <strong>15:00 - 20:30</strong>
                  </li>
                  <li className="text-xl text-ctext/90 font-text">
                    Sabato e Domenica <strong>Chiuso</strong>
                  </li>
                </ul>
                <Socials />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
        <Map />
      </section>
    </GoogleReCaptchaProvider>
  );
}
