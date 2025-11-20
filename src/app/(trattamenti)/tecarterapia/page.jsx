'use client';

import { therapies } from '@/lib/data';
import { ContattiSection, MiniHero, TreatmentBody, TreatmentFaq } from '@/ui';

export default function Tecarterapia() {
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Tecarterapia" />
      <div className="bg-secondary-light py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.tecarterapia} />
        <TreatmentFaq faq={therapies.tecarterapia.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Tecarterapia"
        cta="Prenota Ora"
      />
    </section>
  );
}
