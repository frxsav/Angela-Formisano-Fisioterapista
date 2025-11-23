'use client';

import { therapies } from '@/lib/data';
import { ContattiSection, MiniHero, TreatmentBody, TreatmentFaq } from '@/ui';

export default function Linfodrenaggio() {
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Linfodrenaggio" />
      <div className="bg-secondary-light py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.linfodrenaggio} />
        <TreatmentFaq faq={therapies.linfodrenaggio.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Linfodrenaggio"
        cta="Prenota Ora"
      />
    </section>
  );
}
