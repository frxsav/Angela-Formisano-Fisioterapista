'use client';

import { therapies } from '@/lib/data';
import { ContattiSection, MiniHero, TreatmentBody, TreatmentFaq } from '@/ui';

export default function Massoterapia() {
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Massoterapia" />
      <div className="bg-secondary-light py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.massoterapia} />
        <TreatmentFaq faq={therapies.massoterapia.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Massoterapia"
        cta="Prenota Ora"
      />
    </section>
  );
}
