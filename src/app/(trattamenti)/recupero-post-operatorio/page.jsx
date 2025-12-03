'use client';

import { therapies } from '@/lib/data';
import { ContattiSection, MiniHero, TreatmentBody, TreatmentFaq } from '@/ui';

export default function RecuperoPostOperatorio() {
  return (
    <section className="flex flex-col font-roboto">
      <MiniHero title="Recupero Post-Operatorio" />
      <div className="bg-secondary-light/75 py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.recuperoPostOperatorio} />
        <TreatmentFaq faq={therapies.recuperoPostOperatorio.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Recupero Post-Operatorio"
        cta="Prenota Ora"
      />
    </section>
  );
}
