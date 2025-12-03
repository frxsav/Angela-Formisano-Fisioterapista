import {
  Hero,
  ServiziSection,
  AboutSection,
  Reviews,
  Faq,
  ContattiSection,
} from '@/ui';

export const metadata = {
  title: 'Angela Formisano - Fisioterapista Specializzata | Ercolano, Napoli',
  description:
    'Fisioterapia ad Ercolano: rieducazione posturale, massoterapia e trattamenti personalizzati. Tecnologie avanzate per il tuo benessere.',
  openGraph: {
    title: 'Fisioterapista ad Ercolano - Angela Formisano',
    description: 'Trattamenti personalizzati di fisioterapia ad Ercolano',
    images: ['/images/fisioterapista.png'],
    locale: 'it_IT',
    type: 'website',
  },
  keywords: [
    'fisioterapista ercolano',
    'fisioterapia napoli',
    'rieducazione posturale',
    'massoterapia',
  ],
};

export default function Home() {
  return (
    <main className="font-roboto">
      <Hero />
      <ServiziSection />
      <AboutSection />
      <Reviews />
      <Faq />
      <ContattiSection />
    </main>
  );
}
