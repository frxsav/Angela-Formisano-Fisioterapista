'use client';

import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { ContactForm, Map, Socials, MiniHero } from '@/ui';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Contact() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <section className="flex flex-col font-title">
        <MiniHero title="Contatti" />
        <div className="w-full self-center bg-secondary-light relative z-20 py-16 flex justify-center text-ctext">
          <div className="flex md:flex-row flex-col bg-radial to-primary-900/5 from-secondary-light shadow-lg gap-16 w-[80%] p-8 rounded-3xl">
            <div className="flex flex-col gap-12 md:w-[50%] w-full md:items-start items-center justify-center">
              <div className='md:block flex flex-col items-center'>
                <h3 className="text-4xl font-semibold font-title text-ctext md:text-start text-center">
                  Richiedi un appuntamento
                </h3>
                <div className="border-t-5 border-primary-300 h-[1px] w-20"></div>
                <p className="text-2xl font-text pt-4 w-[90%] md:text-start text-center">
                  Compila il modulo per descrivere il tuo problema. Ti
                  ricontatterò al più presto per fissare una visita.
                </p>
              </div>
              <div className="flex flex-col md:gap-3 gap-6">
                <p className="flex md:flex-row flex-col md:gap-3 md:text-2xl text-xl font-text text-ctext/90 items-center md:text-start text-center">
                  <HiPhone className="text-primary-300 text-2xl" />
                  +39 3394211017
                </p>
                <p className="flex md:flex-row flex-col md:gap-3 md:text-2xl text-xl font-text text-ctext/90 items-center md:text-start text-center">
                  <HiMail className="text-primary-300 text-2xl" />
                  angelaformisano@gmail.com
                </p>
                <p className="flex md:flex-row flex-col md:gap-3 md:text-2xl text-xl font-text text-ctext/90 items-center md:text-start text-center">
                  <HiLocationMarker className="text-primary-300 text-2xl" />
                  Via Nicolò Marcello Venuti 69
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-title font-bold underline md:text-start text-center">
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
