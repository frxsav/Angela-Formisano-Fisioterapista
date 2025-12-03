'use client';

import { therapies } from '@/lib/data';
import {
  ContattiSection,
  MiniHero,
  TreatmentBody,
  TreatmentFaq,
  TreatmentPathologiesDetailed,
} from '@/ui';

export default function FisioterapiaDermatofunzionale() {
  return (
    <section className="flex flex-col font-roboto">
      <MiniHero title="Fisioterapia Dermatofunzionale" />
      <div className="bg-secondary-light/75 py-32 flex flex-col text-ctext relative">
        <TreatmentBody therapy={therapies.fisioterapiaDermatofunzionale} />
        {/* Patologie */}
        <TreatmentPathologiesDetailed
          pathologies={therapies.fisioterapiaDermatofunzionale.pathologies}
        />
        <TreatmentFaq faq={therapies.fisioterapiaDermatofunzionale.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Fisioterapia Dermatofunzionale"
        cta="Prenota Ora"
      />
    </section>
  );
}
