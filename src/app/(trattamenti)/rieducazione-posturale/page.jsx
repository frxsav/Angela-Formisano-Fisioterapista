'use client';

import { therapies } from '@/lib/data';
import {
  ContattiSection,
  MiniHero,
  TreatmentBody,
  TreatmentFaq,
  TreatmentPathologies,
} from '@/ui';

export default function RieducazionePosturale() {
  return (
    <section className="flex flex-col font-roboto">
      <MiniHero title="Rieducazione Posturale" />
      <div className="bg-secondary-light/75 py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.rieducazionePosturale} />
        {/* Patologie */}
        <TreatmentPathologies
          pathologies={therapies.rieducazionePosturale.pathologies}
        />
        <TreatmentFaq faq={therapies.rieducazionePosturale.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una valutazione posturale personalizzata"
        cta="Prenota Ora"
      />
    </section>
  );
}
