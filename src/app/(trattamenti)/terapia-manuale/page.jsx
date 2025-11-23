'use client';

import { therapies } from '@/lib/data';
import { ContattiSection, MiniHero, TreatmentBody, TreatmentFaq } from '@/ui';

export default function TerapiaManuale() {
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Terapia Manuale" />
      <div className="bg-secondary-light py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.terapiaManuale} />
        <TreatmentFaq faq={therapies.terapiaManuale.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Terapia Manuale"
        cta="Prenota Ora"
      />
    </section>
  );
}
