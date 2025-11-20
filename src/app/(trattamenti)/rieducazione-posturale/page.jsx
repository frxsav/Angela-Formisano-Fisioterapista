'use client';

import { therapies } from '@/lib/data';
import { ContattiSection, MiniHero, TreatmentBody, TreatmentFaq } from '@/ui';

export default function RieducazionePosturale() {
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Rieducazione Posturale" />
      <div className="bg-secondary-light py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.rieducazionePosturale} />
        <TreatmentFaq faq={therapies.rieducazionePosturale.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Rieducazione Posturale"
        cta="Prenota Ora"
      />
    </section>
  );
}
