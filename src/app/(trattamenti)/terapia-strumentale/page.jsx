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
    <section className="flex flex-col font-roboto">
      <MiniHero title="Terapia Strumentale" />
      <div className="bg-secondary-light/75 md:py-32 py-16 flex flex-col text-ctext relative">
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
        title="Contattami in privato per prenotare un appuntamento"
        cta="Prenota Ora"
      />
    </section>
  );
}
