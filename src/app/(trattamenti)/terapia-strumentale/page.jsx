'use client';

import { therapies } from '@/lib/data';
import {
  ContattiSection,
  MiniHero,
  TreatmentBody,
  TreatmentFaq,
  TreatmentPathologies,
  TreatmentDetails,
} from '@/ui';

export default function TerapiaStrumentale() {
  const therapiesDetails = [
    'ultrasuoni',
    'tecaterapia',
    'laserterapia',
    'elettrostimolazione',
  ];
  return (
    <section className="flex flex-col font-title">
      <MiniHero title="Terapia Strumentale" />
      <div className="bg-secondary-light/50 py-32 flex flex-col text-ctext relative">
        {/* Main */}
        <TreatmentBody therapy={therapies.terapiaStrumentale} />
        {/* Patologie */}
        <TreatmentPathologies
          pathologies={therapies.terapiaStrumentale.pathologies}
        />
        {/* Terapie */}
        <TreatmentDetails therapies={therapies.terapiaStrumentale.therapies} />
        {/* Faq */}
        <TreatmentFaq faq={therapies.terapiaStrumentale.faq} />
      </div>
      <ContattiSection
        title="Prenota ora una seduta di Terapia Strumentale"
        cta="Prenota Ora"
      />
    </section>
  );
}
