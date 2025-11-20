'use client';

import { therapies } from '@/lib/data';
import { ContattiSection, MiniHero, TreatmentBody, TreatmentFaq } from '@/ui';

export default function TerapiaOndeElettriche() {
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Terapia Onde Elettriche" />
      <div className="bg-secondary-light py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.terapiaOndeElettriche} />
        <TreatmentFaq faq={therapies.terapiaOndeElettriche.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Terapia Onde Elettriche"
        cta="Prenota Ora"
      />
    </section>
  );
}
